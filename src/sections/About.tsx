import { Target } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="about-title" title="About me"  />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="max-w-prose space-y-4 text-lg">
            {profile.aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="card flex gap-3 bg-surface2">
              <Target aria-hidden className="mt-1 shrink-0 text-accent" />
              <div><h3 className="font-semibold">Career objective</h3><p className="mt-1 text-base text-muted">{profile.objective}</p></div>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profile.interests.map((i) => (
              <li key={i.title} className="card"><h3 className="font-semibold">{i.title}</h3><p className="mt-2 text-muted">{i.text}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
