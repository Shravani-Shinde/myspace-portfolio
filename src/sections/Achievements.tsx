import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { external } from '../components/BrandIcons'
import { achievements } from '../data/achievements'

const cats = ['All', ...Array.from(new Set(achievements.map((a) => a.category)))]

export default function Achievements() {
  const [cat, setCat] = useState('All')
  const list = achievements.filter((a) => cat === 'All' || a.category === cat)
  return (
    <section id="achievements" aria-labelledby="ach-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="ach-title" title="Achievements and certifications"  />
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {cats.map((c) => <button key={c} type="button" className="chip-btn" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {list.map((a) => (
            <li key={a.id} className="card">
              <p className="text-sm text-muted">{a.category} · {a.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
              <p className="text-muted">{a.issuer}</p>
              <p className="mt-3">{a.description}</p>
              {a.link && <a className="link mt-3 inline-flex min-h-11 items-center gap-1" href={a.link} {...external}>View certificate <ExternalLink aria-hidden size={14} /><span className="sr-only"> (opens in new tab)</span></a>}
            </li>
          ))}
        </ul>
        <p role="status" aria-live="polite" className="sr-only">Showing {list.length} items</p>
      </div>
    </section>
  )
}
