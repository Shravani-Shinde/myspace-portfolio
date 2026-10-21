import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { LinkIconFor, external } from '../components/BrandIcons'
import { links, profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        <SectionHeading id="contact-title" title="Contact" desc="Questions, collaboration ideas, or opportunities — I’d like to hear from you." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="card self-start">
            <h3 className="text-xl font-semibold">Find me online</h3>
            <p className="mt-2 text-muted">Prefer email? Write to <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
            <ul className="mt-5 space-y-1">
              {links.map((l) => (
                <li key={l.kind}>
                  <a className="flex min-h-12 items-center gap-3 rounded-xl px-2 hover:bg-surface2" href={l.href} {...(l.kind === 'email' ? {} : external)}>
                    <LinkIconFor kind={l.kind} className="size-5 text-accent" />
                    <span className="font-medium">{l.label}</span>
                    {l.kind !== 'email' && <span className="sr-only">(opens in new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
