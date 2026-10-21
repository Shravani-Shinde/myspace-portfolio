export default function SectionHeading({ id, title, desc }: { id: string; title: string; desc?: string }) {
  return (
    <header className="mb-10 max-w-2xl">
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-lg text-muted">{desc}</p>}
    </header>
  )
}
