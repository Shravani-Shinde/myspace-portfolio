import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { computeMetrics, type TestRecord } from '../utils/usabilityMetrics'

export const TASKS = [
  { id: 'T1', text: 'Find the educational qualifications.' },
  { id: 'T2', text: 'Locate a specific project and open its repository.' },
  { id: 'T3', text: 'Find a blog post about a particular topic.' },
  { id: 'T4', text: 'Switch between dark and light mode.' },
  { id: 'T5', text: 'Enter an invalid email in the contact form and correct it.' },
  { id: 'T6', text: 'Find the professional profile (LinkedIn) link.' },
]
const KEY = 'myspace-usability-records'
const load = (): TestRecord[] => { try { const r = JSON.parse(localStorage.getItem(KEY) ?? '[]'); return Array.isArray(r) ? r : [] } catch { return [] } }
const fmt = (n: number | null, d = 1, unit = '') => (n === null ? '—' : `${n.toFixed(d)}${unit}`)

export default function UsabilityEvaluation() {
  const [records, setRecords] = useState<TestRecord[]>(load)
  const [f, setF] = useState({ participant: '', taskId: 'T1', completed: 'yes', time: '', errors: '0', sat: '', notes: '' })
  const [err, setErr] = useState('')
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(records)) } catch { /* ignore */ } }, [records])
  const m = useMemo(() => computeMetrics(records), [records])

  const add = (e: FormEvent) => {
    e.preventDefault()
    const time = f.time.trim() === '' ? null : Number(f.time)
    const sat = f.sat === '' ? null : Number(f.sat)
    const errors = Number(f.errors)
    if (!f.participant.trim()) return setErr('Enter an anonymous participant code, for example P1.')
    if (time !== null && (!Number.isFinite(time) || time < 0)) return setErr('Time must be a number of seconds, 0 or more (or leave it blank).')
    if (!Number.isInteger(errors) || errors < 0) return setErr('Errors must be a whole number, 0 or more.')
    setErr('')
    setRecords((r) => [...r, { id: crypto.randomUUID(), participant: f.participant.trim(), taskId: f.taskId, completed: f.completed === 'yes', timeSec: time, errors, satisfaction: sat, notes: f.notes.trim() }])
    setF((x) => ({ ...x, time: '', errors: '0', sat: '', notes: '' }))
  }
  const remove = (id: string) => { if (confirm('Delete this record? This cannot be undone.')) setRecords((r) => r.filter((x) => x.id !== id)) }
  const clearAll = () => { if (confirm(`Delete all ${records.length} records? This cannot be undone.`)) setRecords([]) }

  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((x) => ({ ...x, [k]: e.target.value }))
  const cards: [string, string, string][] = [
    ['Task completion rate', fmt(m.completionRate, 0, '%'), `${m.completedCount} of ${m.attempts} attempts`],
    ['Average completion time', fmt(m.avgTimeSec, 1, ' s'), `${m.timedAttempts} valid timed attempts`],
    ['Total errors', String(m.totalErrors), 'across all attempts'],
    ['Average satisfaction', fmt(m.avgSatisfaction, 2, ' / 5'), `${m.ratedAttempts} valid ratings`],
  ]
  const perTask = TASKS.map((t) => ({ ...t, ...computeMetrics(records.filter((r) => r.taskId === t.id)) }))
  const max = Math.max(1, ...perTask.map((t) => t.attempts))

  return (
    <main id="main" className="container-x py-12">
      <a href="#home" className="btn-secondary mb-8"><ArrowLeft aria-hidden size={16} /> Back to portfolio</a>
      <h1 className="text-4xl font-bold">Usability Evaluation</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">A tool for running a formative usability test of this site. It starts empty: every number below comes from records you enter. Data is stored only in this browser.</p>

      <section aria-labelledby="method" className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card"><h2 id="method" className="text-xl font-semibold">Method</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted">
            <li>Recruit about 5–8 representative participants; explain the purpose and get consent.</li>
            <li>Give each task below without guiding them.</li>
            <li>Record completion, time, errors and observations.</li>
            <li>Collect a 1–5 satisfaction rating after each task.</li>
            <li>Prioritise recurring problems, fix them, retest and compare.</li>
          </ol>
          <p className="mt-3 text-sm text-muted">A small sample finds problems early; it does not prove universal usability.</p>
        </div>
        <div className="card"><h2 className="text-xl font-semibold">Tasks</h2>
          <ul className="mt-3 space-y-1">{TASKS.map((t) => <li key={t.id}><strong>{t.id}</strong> — {t.text}</li>)}</ul>
        </div>
      </section>

      <section aria-labelledby="dash" className="mt-10">
        <h2 id="dash" className="text-2xl font-semibold">Dashboard</h2>
        {m.attempts === 0 && <p className="mt-2 rounded-xl border border-line bg-surface2 p-4">No test records yet. Add your first attempt below to see results. Missing values show “—” instead of 0.</p>}
        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([label, value, sub]) => (
            <div key={label} className="card"><dt className="text-sm text-muted">{label}</dt><dd className="mt-1 text-3xl font-bold">{value}</dd><dd className="text-sm text-muted">{sub}</dd></div>
          ))}
        </dl>
        <div className="card mt-4 overflow-x-auto">
          <h3 className="font-semibold">Attempts and results per task</h3>
          <table className="mt-3 w-full min-w-[34rem] text-left text-sm">
            <thead><tr className="border-b border-line"><th scope="col" className="py-2 pr-3">Task</th><th scope="col" className="pr-3">Attempts</th><th scope="col" className="pr-3">Completion</th><th scope="col" className="pr-3">Avg time</th><th scope="col">Errors</th></tr></thead>
            <tbody>{perTask.map((t) => (
              <tr key={t.id} className="border-b border-line last:border-0">
                <th scope="row" className="py-2 pr-3 font-medium">{t.id}</th>
                <td className="pr-3"><div className="flex items-center gap-2"><div className="h-2.5 rounded-full bg-accent" style={{ width: `${(t.attempts / max) * 80}px`, minWidth: t.attempts ? 6 : 0 }} aria-hidden />{t.attempts}</div></td>
                <td className="pr-3">{fmt(t.completionRate, 0, '%')}</td><td className="pr-3">{fmt(t.avgTimeSec, 1, ' s')}</td><td>{t.totalErrors}</td>
              </tr>))}</tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">Completion rate = completed attempts ÷ total attempts × 100. Average time = sum of valid times ÷ number of valid timed attempts (blank, negative or non-numeric times are excluded). Average satisfaction = sum of valid 1–5 ratings ÷ number of valid ratings. With no valid data, “—” is shown.</p>
      </section>

      <section aria-labelledby="record" className="mt-10">
        <h2 id="record" className="text-2xl font-semibold">Record an attempt</h2>
        <form onSubmit={add} noValidate className="card mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div><label htmlFor="u-p" className="mb-1 block font-medium">Participant code</label><input id="u-p" className="field" placeholder="e.g. P1 (no real names)" value={f.participant} onChange={set('participant')} /></div>
          <div><label htmlFor="u-t" className="mb-1 block font-medium">Task</label><select id="u-t" className="field" value={f.taskId} onChange={set('taskId')}>{TASKS.map((t) => <option key={t.id} value={t.id}>{t.id} — {t.text}</option>)}</select></div>
          <div><label htmlFor="u-c" className="mb-1 block font-medium">Completed?</label><select id="u-c" className="field" value={f.completed} onChange={set('completed')}><option value="yes">Yes</option><option value="no">No</option></select></div>
          <div><label htmlFor="u-time" className="mb-1 block font-medium">Time (seconds)</label><input id="u-time" inputMode="decimal" className="field" placeholder="optional" value={f.time} onChange={set('time')} /></div>
          <div><label htmlFor="u-e" className="mb-1 block font-medium">Errors</label><input id="u-e" inputMode="numeric" className="field" value={f.errors} onChange={set('errors')} /></div>
          <div><label htmlFor="u-s" className="mb-1 block font-medium">Satisfaction (1–5)</label><select id="u-s" className="field" value={f.sat} onChange={set('sat')}><option value="">Not rated</option>{[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}</select></div>
          <div className="sm:col-span-2 lg:col-span-3"><label htmlFor="u-n" className="mb-1 block font-medium">Observations</label><textarea id="u-n" rows={2} className="field" value={f.notes} onChange={set('notes')} /></div>
          {err && <p role="alert" className="text-danger sm:col-span-2 lg:col-span-3">{err}</p>}
          <div className="sm:col-span-2 lg:col-span-3"><button type="submit" className="btn-primary">Add record</button></div>
        </form>
      </section>

      <section aria-labelledby="table" className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="table" className="text-2xl font-semibold">Records ({records.length})</h2>
          <button type="button" className="btn-secondary" onClick={clearAll} disabled={!records.length}><Trash2 aria-hidden size={16} /> Delete all records</button>
        </div>
        {records.length === 0 ? <p className="card mt-4 text-muted">Nothing recorded yet.</p> : (
          <div className="card mt-4 overflow-x-auto p-0">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead><tr className="border-b border-line">{['Participant', 'Task', 'Completed', 'Time (s)', 'Errors', 'Rating', 'Observations', ''].map((h, i) => <th key={i} scope="col" className="p-3">{h || <span className="sr-only">Actions</span>}</th>)}</tr></thead>
              <tbody>{records.map((r) => (
                <tr key={r.id} className="border-b border-line last:border-0">
                  <td className="p-3">{r.participant}</td><td className="p-3">{r.taskId}</td><td className="p-3">{r.completed ? 'Yes' : 'No'}</td>
                  <td className="p-3">{r.timeSec ?? '—'}</td><td className="p-3">{r.errors}</td><td className="p-3">{r.satisfaction ?? '—'}</td><td className="p-3">{r.notes || '—'}</td>
                  <td className="p-3"><button type="button" className="btn-icon" aria-label={`Delete record for ${r.participant}, task ${r.taskId}`} onClick={() => remove(r.id)}><Trash2 aria-hidden size={16} /></button></td>
                </tr>))}</tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}
