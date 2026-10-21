import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface Props { open: boolean; onClose: () => void; title: string; titleId: string; children: ReactNode }

/** Native <dialog>: built-in focus trap, Esc to close, focus returns to opener. */
export default function Modal({ open, onClose, title, titleId, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose() }}
      className="m-auto max-h-[90vh] w-[min(42rem,94vw)] overflow-y-auto rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl"
    >
      {open && (
        <div className="p-6 sm:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-2xl font-bold">{title}</h2>
            <button type="button" className="btn-icon shrink-0" onClick={onClose} aria-label="Close dialog"><X aria-hidden size={20} /></button>
          </div>
          {children}
        </div>
      )}
    </dialog>
  )
}
