import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import UsabilityEvaluation from './pages/UsabilityEvaluation'
import { useTheme } from './hooks/useTheme'

const isEval = () => window.location.hash === '#/usability'

export default function App() {
  const { theme, toggle } = useTheme()
  const [evalView, setEvalView] = useState(isEval)
  const [announce, setAnnounce] = useState('')

  useEffect(() => {
    const onHash = () => {
      const e = isEval()
      setEvalView(e)
      if (e) window.scrollTo({ top: 0 })
      else { const id = window.location.hash.slice(1); if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView()) }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const onToggle = () => { toggle(); setAnnounce(`Switched to ${theme === 'dark' ? 'light' : 'dark'} theme.`) }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggle} />
      <div role="status" aria-live="polite" className="sr-only">{announce}</div>
      {evalView ? <UsabilityEvaluation /> : (
        <main id="main">
          <Home /><About /><Education /><Skills /><Projects /><Blog /><Achievements /><Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
