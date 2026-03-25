import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

export default function Navbar({ activeSection, onNavigate, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function goTo(id) {
    onNavigate?.(id)
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <button
          type="button"
          onClick={() => goTo('home')}
          className="rounded-md px-2 py-1 text-left text-sm font-semibold tracking-tight text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-100 dark:hover:bg-slate-900/60"
        >
          Fiona<span className="text-indigo-600">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => {
            const isActive = activeSection === l.id
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => goTo(l.id)}
                className={[
                  'rounded-md px-3 py-2 text-sm transition',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                  isActive
                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-900/70 dark:text-slate-100'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-slate-100',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {l.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onToggleTheme}
            className="hidden items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-200 dark:hover:bg-slate-900/60 md:inline-flex"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-200 dark:hover:bg-slate-900/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="mx-auto max-w-6xl px-4 py-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="mb-1 flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-200 dark:hover:bg-slate-900/60"
            >
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            {links.map((l) => {
              const isActive = activeSection === l.id
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => goTo(l.id)}
                  className={[
                    'flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                    isActive
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-900/70 dark:text-slate-100'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60',
                  ].join(' ')}
                >
                  <span>{l.label}</span>
                  {isActive ? <span className="text-xs text-indigo-600">Active</span> : null}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

