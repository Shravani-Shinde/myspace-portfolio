/** Local generated artwork — no external images, fixed aspect ratio (no layout shift). Decorative. */
export default function Thumb({ hue, label }: { hue: number; label: string }) {
  const initials = label.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true" className="aspect-video w-full rounded-xl" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${hue} 55% 28%)`} />
          <stop offset="1" stopColor={`hsl(${(hue + 40) % 360} 60% 42%)`} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#g${hue})`} />
      <circle cx="270" cy="30" r="60" fill="#fff" opacity=".07" />
      <circle cx="40" cy="170" r="70" fill="#fff" opacity=".06" />
      <text x="160" y="104" textAnchor="middle" fontSize="48" fontWeight="700" fill="#fff" opacity=".92" fontFamily="sans-serif">{initials}</text>
    </svg>
  )
}
