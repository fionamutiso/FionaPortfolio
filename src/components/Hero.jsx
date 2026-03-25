import { FiArrowRight } from 'react-icons/fi'

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-7">
          <div className="anim-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Software Developer
            </span>
          </div>

          <h1 className="anim-fade-up anim-delay-1 mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Hi, I’m <span className="text-indigo-600">Fiona</span>.
          </h1>

          <p className="anim-fade-up anim-delay-2 mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I build clean, user-focused web applications and enjoy learning across the full stack.
          </p>

          <div className="anim-fade-up anim-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate?.('projects')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0"
            >
              View Projects <FiArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:focus-visible:ring-offset-slate-950"
            >
              Contact
            </button>

            <a
              href="/FionaCV.docx"
              download
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/70 dark:focus-visible:ring-offset-slate-950"
            >
              Download CV
            </a>
          </div>

          <div className="anim-fade-up anim-delay-4 mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              { label: 'Focus', value: 'Frontend' },
              { label: 'Stack', value: 'React + APIs' },
              { label: 'Goal', value: 'Internship-ready' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700"
              >
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="anim-float-soft rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/30">
            <div className="space-y-4">
              <div className="h-2 w-24 rounded bg-indigo-200" />
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                What I’m focusing on
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Building responsive React interfaces
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Writing clean, maintainable code
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Improving API + database skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

