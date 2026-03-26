import { FiGithub } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {year} Fiona. 
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/fionamutiso"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
          >
            <FiGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

