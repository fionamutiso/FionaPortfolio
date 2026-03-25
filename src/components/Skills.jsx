import { skillCategories } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Skills
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A focused toolkit for building modern web applications.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.key}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 ring-1 ring-slate-200 dark:bg-slate-950/40 dark:ring-slate-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {cat.title}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {cat.skills.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

