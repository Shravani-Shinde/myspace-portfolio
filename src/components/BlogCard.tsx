import { Clock } from 'lucide-react'
import { readingTime, type BlogPost } from '../data/blogPosts'
import Thumb from './Thumb'

export const dateLabel = (d: string | null) =>
  d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Sample draft (not published)'

export default function BlogCard({ post, onOpen }: { post: BlogPost; onOpen: (p: BlogPost) => void }) {
  return (
    <li className="card flex flex-col gap-3 p-5">
      <Thumb hue={post.hue} label={post.title} />
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <span className="chip min-h-8 text-xs">{post.category}</span>
        <span className="inline-flex items-center gap-1"><Clock aria-hidden size={14} />{readingTime(post)} min read</span>
      </div>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-sm text-muted">{dateLabel(post.date)}</p>
      <p className="text-muted">{post.summary}</p>
      <button type="button" className="btn-secondary mt-auto" onClick={() => onOpen(post)}>
        Read article<span className="sr-only">: {post.title}</span>
      </button>
    </li>
  )
}
