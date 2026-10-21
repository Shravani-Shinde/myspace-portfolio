import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import Thumb from './Thumb'

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <li className="card flex flex-col gap-4 p-5">
      <Thumb hue={project.hue} label={project.title} />
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="chip">{project.category}</span>
        <span>Status: {project.status}</span>
      </div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-muted">{project.summary}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((t) => <li key={t} className="chip min-h-8 text-xs">{t}</li>)}
      </ul>
      <button type="button" className="btn-secondary mt-auto" onClick={() => onOpen(project)} aria-haspopup="dialog">
        View details <ArrowUpRight aria-hidden size={16} /><span className="sr-only"> for {project.title}</span>
      </button>
    </li>
  )
}
