import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Clock, RotateCcw, Search, SearchX } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import BlogCard, { dateLabel } from '../components/BlogCard'
import { blogPosts, readingTime, type BlogPost } from '../data/blogPosts'

const cats = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function Blog() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState<BlogPost | null>(null)
  const headRef = useRef<HTMLHeadingElement>(null)

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    return blogPosts.filter((p) => (cat === 'All' || p.category === cat) &&
      (!s || p.title.toLowerCase().includes(s) || p.content.join(' ').toLowerCase().includes(s) || p.tags.some((t) => t.toLowerCase().includes(s))))
  }, [q, cat])
  const filtered = q !== '' || cat !== 'All'
  const reset = () => { setQ(''); setCat('All') }

  useEffect(() => { if (open) headRef.current?.focus() }, [open])
  const back = () => { setOpen(null); requestAnimationFrame(() => document.getElementById('blog')?.scrollIntoView()) }

  return (
    <section id="blog" aria-labelledby="blog-title" className="scroll-mt-20 py-16">
      <div className="container-x">
        {open ? (
          <article className="mx-auto max-w-2xl">
            <button type="button" className="btn-secondary mb-8" onClick={back}><ArrowLeft aria-hidden size={16} /> Back to blog</button>
            <p className="rounded-lg border border-line bg-surface2 px-3 py-2 text-sm text-muted">Sample draft — not a real publication.</p>
            <h2 id="blog-title" ref={headRef} tabIndex={-1} className="mt-6 text-3xl font-bold sm:text-4xl">{open.title}</h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 text-muted">
              <span>{dateLabel(open.date)}</span><span>{open.category}</span>
              <span className="inline-flex items-center gap-1"><Clock aria-hidden size={14} />{readingTime(open)} min read</span>
            </p>
            <div className="mt-8 space-y-5 text-lg leading-8">{open.content.map((p) => <p key={p}>{p}</p>)}</div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tags">{open.tags.map((t) => <li key={t} className="chip min-h-8 text-xs">#{t}</li>)}</ul>
            <button type="button" className="btn-secondary mt-10" onClick={back}><ArrowLeft aria-hidden size={16} /> Back to blog</button>
          </article>
        ) : (
          <>
            <SectionHeading id="blog-title" title="Blog" />
            <div className="card mb-8 space-y-5">
              <div>
                <label htmlFor="b-search" className="mb-1.5 block font-medium">Search articles</label>
                <div className="relative">
                  <Search aria-hidden size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input id="b-search" type="search" className="field pl-11" placeholder="Search by title, content or tag" value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
              </div>
              <fieldset>
                <legend className="mb-2 font-medium">Category</legend>
                <div className="flex flex-wrap gap-2">{cats.map((c) => <button key={c} type="button" className="chip-btn" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
              </fieldset>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p role="status" aria-live="polite" className="text-muted">Showing {results.length} of {blogPosts.length} articles{filtered ? ' (filters applied)' : ''}.</p>
                <button type="button" className="btn-secondary" onClick={reset} disabled={!filtered}><RotateCcw aria-hidden size={16} /> Reset filters</button>
              </div>
            </div>
            {results.length > 0 ? (
              <ul className="grid gap-6 md:grid-cols-2">{results.map((p) => <BlogCard key={p.id} post={p} onOpen={setOpen} />)}</ul>
            ) : (
              <div className="card flex flex-col items-center py-12 text-center">
                <SearchX aria-hidden size={36} className="text-accent" />
                <h3 className="mt-3 text-xl font-semibold">No articles found</h3>
                <p className="mt-1 text-muted">Check the spelling or clear the filters.</p>
                <button type="button" className="btn-primary mt-5" onClick={reset}>Reset filters</button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
