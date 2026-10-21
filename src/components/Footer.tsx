import { ArrowUp } from 'lucide-react'
import { NAV } from './Navbar'
import { LinkIconFor, external } from './BrandIcons'
import { links, profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">My<span className="text-accent">Space</span></p>
          <p className="mt-2 max-w-xs text-muted">Thanks for visiting. Feel free to get in touch about projects or collaboration.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-4">
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="inline-flex min-h-11 items-center hover:underline">{label}</a></li>
            ))}
            <li><a href="#/usability" className="inline-flex min-h-11 items-center hover:underline">Usability Evaluation</a></li>
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <ul className="flex gap-2">
            {links.map((l) => (
              <li key={l.kind}>
                <a className="btn-icon" href={l.href} aria-label={l.label} {...(l.kind === 'email' ? {} : external)}>
                  <LinkIconFor kind={l.kind} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="btn-secondary" onClick={() => window.scrollTo({ top: 0 })}>
            <ArrowUp aria-hidden size={16} /> Back to top
          </button>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
