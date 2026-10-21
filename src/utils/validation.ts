export interface ContactValues { name: string; email: string; subject: string; message: string }
export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateField(field: keyof ContactValues, raw: string): string | undefined {
  const v = raw.trim()
  switch (field) {
    case 'name':
      if (!v) return 'Enter your name.'
      if (v.length < 2) return 'Your name needs at least 2 characters.'
      return undefined
    case 'email':
      if (!v) return 'Enter your email address.'
      if (!EMAIL_RE.test(v)) return 'Enter a valid email address, for example name@example.com.'
      return undefined
    case 'subject':
      return v ? undefined : 'Enter a subject so I know what your message is about.'
    case 'message':
      if (!v) return 'Write a message.'
      if (v.length < 10) return 'Your message needs at least 10 characters.'
      return undefined
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  ;(Object.keys(values) as (keyof ContactValues)[]).forEach((k) => {
    const e = validateField(k, values[k])
    if (e) errors[k] = e
  })
  return errors
}
