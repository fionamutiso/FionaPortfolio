import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              About
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I’m a Computer Science student building practical projects while strengthening my
              fundamentals in frontend development and APIs.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700">
              <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <p>
                  I enjoy turning ideas into clean, accessible interfaces and learning how systems
                  work end-to-end.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Background</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      Student developer focused on building real projects for internship readiness.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Interests</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      React UI, backend APIs, databases, and deploying reliable web apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

