import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Projects
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Selected work with a focus on clarity, usability, and clean UI.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

