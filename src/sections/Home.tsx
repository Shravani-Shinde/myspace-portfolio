import { useState } from 'react'
import { ArrowDown, Download, FolderOpen } from 'lucide-react'
import { profile, links } from '../data/profile'
import { LinkIconFor, external } from '../components/BrandIcons'

export default function Home() {
  const [msg, setMsg] = useState('')
  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 font-medium text-accent">Hello, I’m</p>
          <h1 id="hero-title" className="text-5xl font-extrabold sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-semibold sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary"><FolderOpen aria-hidden size={18} /> Explore My Projects</a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} download className="btn-secondary"><Download aria-hidden size={18} /> Download Resume</a>
            ) : (
              <button type="button" className="btn-secondary" onClick={() => setMsg('Resume not added yet. Place your PDF at public/resume.pdf and set resumeUrl in src/data/profile.ts.')}>
                <Download aria-hidden size={18} /> Download Resume
              </button>
            )}
          </div>
          <p role="status" className="mt-3 max-w-xl text-sm text-muted">{msg}</p>
          <ul className="mt-6 flex gap-2">
            {links.filter((l) => l.kind !== 'email').map((l) => (
              <li key={l.kind}><a className="btn-icon" href={l.href} aria-label={`${l.label} profile (opens in new tab)`} {...external}><LinkIconFor kind={l.kind} className="size-5" /></a></li>
            ))}
          </ul>
        </div>
                <div className="mx-auto w-full max-w-xs">
          <img
            src="/images/profile.jpeg"   alt={`${profile.name} profile photo`}
            className="aspect-square w-full rounded-[2rem] border border-line object-cover"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <a href="#about" className="inline-flex min-h-11 items-center gap-2 text-muted hover:text-ink">Scroll to About <ArrowDown aria-hidden size={16} /></a>
      </div>
    </section>
  )
}
