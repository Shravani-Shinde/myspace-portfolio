import { useMemo, useState } from 'react'
import { ExternalLink, RotateCcw, Search, SearchX } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import Thumb from '../components/Thumb'
import { external } from '../components/BrandIcons'
import { projects, type Project } from '../data/projects'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
const allTech = Array.from(new Set(projects.flatMap((p) => p.tech))).sort()

export default function Projects() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [tech, setTech] = useState<string[]>([])
  const [selected, setSelected] = useState<Project | null>(null)

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    return projects.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      tech.every((t) => p.tech.includes(t)) &&
      (!s || p.title.toLowerCase().includes(s) || p.summary.toLowerCase().includes(s) || p.problem.toLowerCase().includes(s)))
  }, [q, cat, tech])

  const filtered = q !== '' || cat !== 'All' || tech.length > 0
  const reset = () => { setQ(''); setCat('All'); setTech([]) }
  const toggleTech = (t: string) => setTech((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]))

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="projects-title" title="Projects" />

        <div className="card mb-8 space-y-5">
          <div>
            <label htmlFor="p-search" className="mb-1.5 block font-medium">Search projects</label>
            <div className="relative">
              <Search aria-hidden size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input id="p-search" type="search" className="field pl-11" placeholder="Search by title or description" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <fieldset>
            <legend className="mb-2 font-medium">Category</legend>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => <button key={c} type="button" className="chip-btn" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-2 font-medium">Technology <span className="font-normal text-muted">(project must use all selected)</span></legend>
            <div className="flex flex-wrap gap-2">
              {allTech.map((t) => <button key={t} type="button" className="chip-btn" aria-pressed={tech.includes(t)} onClick={() => toggleTech(t)}>{t}</button>)}
            </div>
          </fieldset>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p role="status" aria-live="polite" className="text-muted">
              Showing {results.length} of {projects.length} projects{filtered ? ' (filters applied)' : ''}.
            </p>
            <button type="button" className="btn-secondary" onClick={reset} disabled={!filtered}><RotateCcw aria-hidden size={16} /> Reset filters</button>
          </div>
        </div>

        {results.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
          </ul>
        ) : (
          <div className="card flex flex-col items-center py-12 text-center">
            <SearchX aria-hidden size={36} className="text-accent" />
            <h3 className="mt-3 text-xl font-semibold">No projects match your search</h3>
            <p className="mt-1 text-muted">Try fewer filters or different keywords.</p>
            <button type="button" className="btn-primary mt-5" onClick={reset}>Reset filters</button>
          </div>
        )}

        <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title ?? ''} titleId="project-dialog-title">
          {selected && (
            <div className="space-y-5">
              <Thumb hue={selected.hue} label={selected.title} />
              <p className="text-sm text-muted">{selected.category} · Status: {selected.status}</p>
              <p>{selected.summary}</p>
              <div><h3 className="font-semibold">Problem being solved</h3><p className="mt-1 text-muted">{selected.problem}</p></div>
              <div><h3 className="font-semibold">Main features</h3><ul className="mt-1 list-disc space-y-1 pl-5 text-muted">{selected.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
              <div><h3 className="font-semibold">Technologies</h3><ul className="mt-2 flex flex-wrap gap-2">{selected.tech.map((t) => <li key={t} className="chip min-h-8 text-xs">{t}</li>)}</ul></div>
              <div className="flex flex-wrap gap-3">
                <a className="btn-primary" href={selected.repo} {...external}>GitHub repository <ExternalLink aria-hidden size={16} /><span className="sr-only"> (opens in new tab)</span></a>
                {selected.demo
                  ? <a className="btn-secondary" href={selected.demo} {...external}>Live demo <ExternalLink aria-hidden size={16} /><span className="sr-only"> (opens in new tab)</span></a>
                  : <span className="inline-flex min-h-11 items-center text-sm text-muted">No live demo available.</span>}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}
