import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight } from './Icons.jsx'

// Elements that fade/slide in as they scroll into view. Siblings get a stagger delay.
const REVEAL = [
  ['.section__title, .page-header h1, .page-header__text, .crumbs, .muted', 'up'],
  ['.service, .product, .card, .step, .stat, .features li, .steps > *', 'up'],
  ['.partners', 'up'],
  ['.about__card, .track, .careers, .panel, .map, .cta .btn-row', 'up'],
  ['.about__main, .powering__media, .detail img', 'zoom'],
  ['.about__text, .detail > div', 'right'],
  ['.about__row, .track__card', 'left'],
  ['.footer__grid > *', 'up'],
]

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function tag(root, io) {
  for (const [sel, kind] of REVEAL) {
    root.querySelectorAll(sel).forEach((el) => {
      if ('shown' in el.dataset) return
      if (!el.dataset.reveal) {
        el.dataset.reveal = kind
        const i = [...el.parentElement.children].indexOf(el)
        el.style.setProperty('--d', `${Math.min(i, 6) * 90}ms`)
      }
      io.observe(el)
    })
  }
}

// Animate numbers such as "20B" or "300M" from 0 up to their value.
function countUp(el) {
  const target = parseFloat(el.dataset.count)
  const start = performance.now()
  const step = (t) => {
    const p = Math.min((t - start) / 1400, 1)
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)))
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Motion() {
  const { pathname } = useLocation()
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  // Scroll reveals + count-up, re-scanned on every route and on DOM changes (filters etc.)
  useEffect(() => {
    if (reduced()) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.dataset.shown = ''
        e.target.querySelectorAll('[data-count]').forEach(countUp)
        io.unobserve(e.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    const root = document.body
    tag(root, io)
    let pending = 0
    const mo = new MutationObserver(() => {
      if (pending) return
      pending = requestAnimationFrame(() => { pending = 0; tag(root, io) })
    })
    mo.observe(document.querySelector('main'), { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect(); cancelAnimationFrame(pending) }
  }, [pathname])

  // Scroll progress, sticky-nav state, parallax
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? y / max : 0)
        setShowTop(y > 700)
        document.documentElement.classList.toggle('is-scrolled', y > 10)
        if (!reduced()) {
          document.querySelectorAll('[data-parallax]').forEach((el) => {
            const r = el.getBoundingClientRect()
            const offset = (r.top + r.height / 2 - window.innerHeight / 2) * parseFloat(el.dataset.parallax)
            el.style.setProperty('--py', `${offset.toFixed(1)}px`)
          })
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [pathname])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <button
        className={`to-top ${showTop ? 'is-on' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUpRight style={{ transform: 'rotate(-45deg)' }} />
      </button>
    </>
  )
}
