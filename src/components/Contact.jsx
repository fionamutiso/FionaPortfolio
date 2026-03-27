import { FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal className="max-w-2xl">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Want to collaborate or have an opportunity? Reach out directly.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
                href="mailto:fionakasoa0@gmail.com"
              >
                <FiMail className="h-4 w-4 text-indigo-600" />
                fionakasoa0@gmail.com
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
                href="tel:+254796494634"
              >
                <FiPhone className="h-4 w-4 text-indigo-600" />
                +254 796 494 634
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/fionamutiso"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:bg-slate-900/70"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

