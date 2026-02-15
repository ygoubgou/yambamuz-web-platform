"use client"

import { ExternalLink } from "lucide-react"
import { funCards } from "@/lib/data"

export function SectionSamuser() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {funCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
          >
            <span className="shrink-0 text-2xl">{card.emoji}</span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {card.category}
                </span>
              </div>
              <p className="font-medium text-foreground">{card.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
            <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  )
}
