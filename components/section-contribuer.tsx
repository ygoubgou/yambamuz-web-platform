"use client"

import { Mail, Lightbulb, Send, Check } from "lucide-react"
import { useState } from "react"

export function SectionContribuer() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [contactSent, setContactSent] = useState(false)
  const [idea, setIdea] = useState("")
  const [ideaSubmitted, setIdeaSubmitted] = useState(false)

  const handleContactSubmit = () => {
    if (contactForm.email.trim() && contactForm.message.trim()) {
      setContactSent(true)
      setTimeout(() => {
        setContactForm({ name: "", email: "", message: "" })
        setContactSent(false)
      }, 3000)
    }
  }

  const handleIdeaSubmit = () => {
    if (idea.trim()) {
      setIdeaSubmitted(true)
      setTimeout(() => {
        setIdea("")
        setIdeaSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Me contacter</p>
              <p className="text-sm text-muted-foreground">Une question ?</p>
            </div>
          </div>

          {contactSent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium text-foreground">Message envoye !</p>
              <p className="text-sm text-muted-foreground">
                Merci, je vous repondrai rapidement.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Votre nom"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none"
              />
              <textarea
                placeholder="Votre message..."
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none"
              />
              <button
                onClick={handleContactSubmit}
                disabled={!contactForm.email.trim() || !contactForm.message.trim()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Envoyer
                <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Ideas Box */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Proposer une idee</p>
              <p className="text-sm text-muted-foreground">Ameliorons ensemble</p>
            </div>
          </div>

          {ideaSubmitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium text-foreground">Merci pour votre idee !</p>
              <p className="text-sm text-muted-foreground">
                Elle sera etudiee avec attention.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Quelle fonctionnalite aimeriez-vous voir ? Un nouveau cours, un outil, une amelioration..."
                rows={8}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none"
              />
              <button
                onClick={handleIdeaSubmit}
                disabled={!idea.trim()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Proposer
                <Lightbulb className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
