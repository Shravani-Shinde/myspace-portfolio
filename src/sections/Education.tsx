import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="edu-title" title="Education" desc="Sample records — replace with your real academic history." />
        <ol className="relative space-y-6 border-l-2 border-line pl-6 sm:pl-8">
          {profile.education.map((e) => (
            <li key={e.institution} className="relative">
              <span aria-hidden className="absolute -left-[2.2rem] top-5 flex size-8 items-center justify-center rounded-full border border-line bg-surface text-accent sm:-left-[2.7rem]"><GraduationCap size={16} /></span>
              <article className="card">
                <p className="text-sm text-muted">{e.start} – {e.end}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.qualification}, {e.field}</h3>
                <p className="text-muted">{e.institution}{e.score ? ` · Score: ${e.score}` : ''}</p>
                {e.coursework.length > 0 && (
                  <>
                    <h4 className="mt-4 font-medium">Relevant coursework</h4>
                    <ul className="mt-2 flex flex-wrap gap-2">{e.coursework.map((c) => <li key={c} className="chip min-h-8 text-xs">{c}</li>)}</ul>
                  </>
                )}
                {e.highlights.length > 0 && (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">{e.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
