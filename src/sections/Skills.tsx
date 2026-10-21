import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="skills-title" title="Skills" desc="Technologies and tools I use to build projects and solve real-world problems." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((g) => (
            <article key={g.category} className="card">
              <h3 className="font-semibold">{g.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
