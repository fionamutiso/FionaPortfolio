import { experience } from '../data/experience.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Experience
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Internship and hands-on work that highlights impact and growth.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <div
                key={`${item.org}-${item.role}`}
                className="rounded-xl border border-slate-200 p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/20 dark:hover:border-slate-700"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.duration}
                  </p>
                </div>
                <p className="mt-1 text-sm text-indigo-600">{item.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

