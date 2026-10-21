import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react'
import { validateContact, validateField, type ContactErrors, type ContactValues } from '../utils/validation'
import { profile } from '../data/profile'

const empty: ContactValues = { name: '', email: '', subject: '', message: '' }
const FIELDS: { key: keyof ContactValues; label: string; type: string; placeholder: string; autoComplete?: string }[] = [
  { key: 'name', label: 'Name', type: 'text', placeholder: 'e.g. Asha Patel', autoComplete: 'name' },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'e.g. asha@example.com', autoComplete: 'email' },
  { key: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Collaboration on a project' },
]

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(empty)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [validated, setValidated] = useState(false) // true = passed local validation; blocks duplicate clicks
  const formRef = useRef<HTMLFormElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof ContactValues
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setValidated(false)
    if (errors[key]) setErrors((er) => ({ ...er, [key]: validateField(key, e.target.value) }))
  }
  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof ContactValues
    setErrors((er) => ({ ...er, [key]: validateField(key, e.target.value) }))
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validated) return
    const errs = validateContact(values)
    setErrors(errs)
    const first = (Object.keys(errs) as (keyof ContactValues)[])[0]
    if (first) { formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(); return }
    setValidated(true)
  }
  const reset = () => { setValues(empty); setErrors({}); setValidated(false) }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`
  const errCount = Object.keys(errors).filter((k) => errors[k as keyof ContactValues]).length

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card space-y-5" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-xl font-semibold">Send a message</h3>
      <p className="text-sm text-muted">Fields marked <span aria-hidden>*</span><span className="sr-only">with an asterisk</span> are required.</p>

      {errCount > 0 && (
        <div role="alert" className="flex gap-2 rounded-xl border-2 border-danger p-3 text-danger">
          <AlertCircle aria-hidden className="mt-0.5 shrink-0" size={18} />
          <p>Please fix {errCount} {errCount === 1 ? 'field' : 'fields'} below. What you already typed has been kept.</p>
        </div>
      )}

      {FIELDS.map((f) => (
        <div key={f.key}>
          <label htmlFor={`c-${f.key}`} className="mb-1.5 block font-medium">{f.label} <span aria-hidden className="text-danger">*</span></label>
          <input id={`c-${f.key}`} name={f.key} type={f.type} value={values[f.key]} onChange={onChange} onBlur={onBlur}
            placeholder={f.placeholder} autoComplete={f.autoComplete} required aria-required="true"
            aria-invalid={errors[f.key] ? 'true' : 'false'} aria-describedby={errors[f.key] ? `e-${f.key}` : undefined} className="field" />
          {errors[f.key] && <p id={`e-${f.key}`} className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"><AlertCircle aria-hidden size={16} className="mt-0.5 shrink-0" />{errors[f.key]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="c-message" className="mb-1.5 block font-medium">Message <span aria-hidden className="text-danger">*</span></label>
        <textarea id="c-message" name="message" rows={5} value={values.message} onChange={onChange} onBlur={onBlur}
          placeholder="Write at least 10 characters…" required aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'e-message' : undefined} className="field" />
        {errors.message && <p id="e-message" className="mt-1.5 flex items-start gap-1.5 text-sm text-danger"><AlertCircle aria-hidden size={16} className="mt-0.5 shrink-0" />{errors.message}</p>}
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={validated}>{validated ? 'Checked' : 'Check and prepare message'}</button>
        <button type="button" className="btn-secondary" onClick={reset}>Clear form</button>
      </div>

      <div role="status" aria-live="polite">
        {validated && (
          <div className="rounded-xl border-2 border-ok p-4">
            <p className="flex items-center gap-2 font-semibold text-ok"><CheckCircle2 aria-hidden size={18} /> Your details look valid.</p>
            <p className="mt-1 text-muted">This site has no mail server, so <strong>nothing has been sent yet</strong>. Open your email app to send the message.</p>
            <a href={mailto} className="btn-primary mt-3"><Mail aria-hidden size={16} /> Open in email app</a>
          </div>
        )}
      </div>
    </form>
  )
}
