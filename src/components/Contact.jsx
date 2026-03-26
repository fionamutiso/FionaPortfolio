import { useState } from 'react'
import { FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const fromEmail = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    setError('')
    setStatus('sending')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setError('Email is not configured yet. Add EmailJS keys in your .env file.')
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'fionakasoa0@gmail.com',
          from_name: name,
          reply_to: fromEmail,
          message,
        },
        { publicKey },
      )

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setError('Failed to send. Please try again in a moment.')
    }
  }

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Want to collaborate or have an opportunity? Send a message.
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

          <div className="md:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/20 transition focus:border-indigo-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/20 transition focus:border-indigo-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <label className="space-y-1">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500/20 transition focus:border-indigo-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                    placeholder="How can I help?"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 dark:focus-visible:ring-offset-slate-950"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <div className="min-h-[20px]">
                    {status === 'sent' ? (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        Sent. I’ll get back to you soon.
                      </p>
                    ) : null}
                    {status === 'error' ? (
                      <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                    ) : null}
                    {status === 'idle' ? (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Replies will go to your email address.
                      </p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

