import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustMarquee from './components/TrustMarquee'
import ProblemSection from './components/ProblemSection'
import ServicesExplorer from './components/ServicesExplorer'
import WhyTrilogiks from './components/WhyTrilogiks'
import Process from './components/Process'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import StatsBand from './components/StatsBand'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Scroll progress bar
    const bar = document.getElementById('ks-progress')
    const topBtn = document.getElementById('ks-top-btn')
    const onScroll = () => {
      if (bar) {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        bar.style.width = pct + '%'
      }
      if (topBtn) {
        if (window.scrollY > 400) {
          topBtn.style.opacity = '1'
          topBtn.style.transform = 'translateY(0) scale(1)'
          topBtn.style.pointerEvents = 'auto'
        } else {
          topBtn.style.opacity = '0'
          topBtn.style.transform = 'translateY(16px) scale(.9)'
          topBtn.style.pointerEvents = 'none'
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // IntersectionObserver for scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))

    // Count-up
    const countEls = document.querySelectorAll('[data-count]')
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target
          const target = parseFloat(el.dataset.count)
          const suffix = el.dataset.suffix || ''
          const prefix = el.dataset.prefix || ''
          const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0
          const dur = 1800
          const start = performance.now()
          const step = (now) => {
            const p = Math.min((now - start) / dur, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            el.textContent = prefix + (target * ease).toFixed(decimals) + suffix
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          countObserver.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    countEls.forEach(el => countObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      countObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div id="ks-progress" />
      <button id="ks-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <ProblemSection />
        <ServicesExplorer />
        <WhyTrilogiks />
        <Process />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <StatsBand />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
