export interface TestRecord {
  id: string
  participant: string
  taskId: string
  completed: boolean
  timeSec: number | null
  errors: number
  satisfaction: number | null
  notes: string
}

export interface Metrics {
  attempts: number
  completedCount: number
  /** % — null when there are no attempts */
  completionRate: number | null
  /** seconds — null when there are no valid timed attempts */
  avgTimeSec: number | null
  timedAttempts: number
  totalErrors: number
  /** 1–5 — null when there are no valid ratings */
  avgSatisfaction: number | null
  ratedAttempts: number
}

export const isValidTime = (t: unknown): t is number => typeof t === 'number' && Number.isFinite(t) && t >= 0
export const isValidRating = (r: unknown): r is number => typeof r === 'number' && Number.isInteger(r) && r >= 1 && r <= 5
const validErrors = (e: number) => (Number.isFinite(e) && e > 0 ? Math.floor(e) : 0)

export function computeMetrics(records: TestRecord[]): Metrics {
  const attempts = records.length
  const completedCount = records.filter((r) => r.completed).length
  const times = records.map((r) => r.timeSec).filter(isValidTime)
  const ratings = records.map((r) => r.satisfaction).filter(isValidRating)
  const sum = (a: number[]) => a.reduce((x, y) => x + y, 0)
  return {
    attempts,
    completedCount,
    completionRate: attempts ? (completedCount / attempts) * 100 : null,
    avgTimeSec: times.length ? sum(times) / times.length : null,
    timedAttempts: times.length,
    totalErrors: sum(records.map((r) => validErrors(r.errors))),
    avgSatisfaction: ratings.length ? sum(ratings) / ratings.length : null,
    ratedAttempts: ratings.length,
  }
}
