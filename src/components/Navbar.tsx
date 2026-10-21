import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

export const NAV = [
  ['home', 'Home'], ['about', 'About'], ['education', 'Education'], ['skills', 'Skills'],
  ['projects', 'Projects'], ['blog', 'Blog'], ['achievements', 'Achievements'], ['contact', 'Contact'],
] as const

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls = (id: string) =>
    `flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-surface2 ${
      active === id ? 'bg-surface2 text-accent underline underline-offset-8 decoration-2' : 'text-ink'}`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#home" className="text-xl font-bold tracking-tight" aria-label="MySpace — go to top">
          My<span className="text-accent">Space</span>
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={linkCls(id)} aria-current={active === id ? 'location' : undefined}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button ref={btnRef} type="button" className="btn-icon lg:hidden" aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x grid grid-cols-2 gap-1 py-3">
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={linkCls(id)} onClick={() => setOpen(false)} aria-current={active === id ? 'location' : undefined}>{label}</a></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
