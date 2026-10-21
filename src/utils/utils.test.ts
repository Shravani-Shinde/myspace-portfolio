import { describe, expect, it } from 'vitest'
import { computeMetrics, type TestRecord } from './usabilityMetrics'
import { validateContact, validateField } from './validation'

const rec = (o: Partial<TestRecord>): TestRecord => ({
  id: 'x', participant: 'P1', taskId: 'T1', completed: true, timeSec: 10, errors: 0, satisfaction: 4, notes: '', ...o,
})

describe('computeMetrics', () => {
  it('returns nulls (no NaN / divide-by-zero) for empty data', () => {
    const m = computeMetrics([])
    expect(m).toMatchObject({ attempts: 0, completionRate: null, avgTimeSec: null, avgSatisfaction: null, totalErrors: 0 })
  })
  it('computes completion rate, averages and errors', () => {
    const m = computeMetrics([
      rec({ completed: true, timeSec: 10, errors: 1, satisfaction: 5 }),
      rec({ completed: false, timeSec: 30, errors: 2, satisfaction: 3 }),
      rec({ completed: true, timeSec: 20, errors: 0, satisfaction: 4 }),
      rec({ completed: true, timeSec: 40, errors: 0, satisfaction: 4 }),
    ])
    expect(m.completionRate).toBe(75)
    expect(m.avgTimeSec).toBe(25)
    expect(m.totalErrors).toBe(3)
    expect(m.avgSatisfaction).toBe(4)
  })
  it('ignores missing or invalid time and ratings', () => {
    const m = computeMetrics([
      rec({ timeSec: null, satisfaction: null }),
      rec({ timeSec: -5, satisfaction: 9 }),
      rec({ timeSec: Number.NaN, satisfaction: 0 }),
      rec({ timeSec: 12, satisfaction: 2 }),
    ])
    expect(m.timedAttempts).toBe(1)
    expect(m.avgTimeSec).toBe(12)
    expect(m.ratedAttempts).toBe(1)
    expect(m.avgSatisfaction).toBe(2)
  })
})

describe('validation', () => {
  it('rejects bad emails and accepts good ones', () => {
    expect(validateField('email', 'abc')).toBeTruthy()
    expect(validateField('email', 'a@b')).toBeTruthy()
    expect(validateField('email', 'a@b.com')).toBeUndefined()
  })
  it('flags every empty required field', () => {
    expect(Object.keys(validateContact({ name: '', email: '', subject: '', message: '' }))).toHaveLength(4)
  })
  it('passes valid input', () => {
    expect(validateContact({ name: 'Asha', email: 'a@b.com', subject: 'Hi', message: 'Hello there!' })).toEqual({})
  })
})
