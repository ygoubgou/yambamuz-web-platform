"use client"

import {
  TrendingUp,
  Database,
  Calculator,
  PieChart,
  ArrowLeft,
  Download,
  BookOpen,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"
import { categories, type Category, type Module } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Database,
  Calculator,
  PieChart,
}

interface SectionApprendreProps {
  searchFilter?: string
  initialCategoryId?: string | null
  initialModuleId?: string | null
}

export function SectionApprendre({
  searchFilter,
  initialCategoryId,
  initialModuleId,
}: SectionApprendreProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)

  // Handle external navigation from search
  useEffect(() => {
    if (initialCategoryId) {
      const cat = categories.find((c) => c.id === initialCategoryId)
      if (cat) {
        setSelectedCategory(cat)
        if (initialModuleId) {
          const mod = cat.modules.find((m) => m.id === initialModuleId)
          if (mod) setSelectedModule(mod)
        }
      }
    }
  }, [initialCategoryId, initialModuleId])

  const filteredCategories = searchFilter
    ? categories.filter(
        (cat) =>
          cat.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
          cat.modules.some(
            (m) =>
              m.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
              m.description.toLowerCase().includes(searchFilter.toLowerCase())
          )
      )
    : categories

  // Level 3: Module content view
  if (selectedModule && selectedCategory) {
    return (
      <div className="mx-auto w-full max-w-2xl">
        <button
          onClick={() => setSelectedModule(null)}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {"Retour a "}{selectedCategory.label}
        </button>

        <div className="mb-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
            {selectedCategory.label}
          </p>
          <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {selectedModule.title}
          </h3>
          <p className="mt-2 text-muted-foreground">
            {selectedModule.description}
          </p>
        </div>

        <div className="mb-10 h-px w-full bg-border" />

        <div className="space-y-5">
          {selectedModule.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <div className="mt-8">
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <Download className="h-4 w-4" />
            Telecharger le support PDF
          </button>
        </div>
      </div>
    )
  }

  // Level 2: Module list view
  if (selectedCategory) {
    return (
      <div className="mx-auto w-full max-w-2xl">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Toutes les matieres
        </button>

        <div className="mb-8 flex items-center gap-4">
          <span className="text-3xl">{selectedCategory.emoji}</span>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {selectedCategory.label}
            </h3>
            <p className="text-sm text-muted-foreground">
              {selectedCategory.modules.length} chapitres disponibles
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {selectedCategory.modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <BookOpen className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{mod.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {mod.description}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Level 1: Category grid
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        {filteredCategories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                {cat.emoji}
              </span>
              <div className="min-w-0">
                <p className="font-medium text-foreground">{cat.label}</p>
                <p className="text-sm text-muted-foreground">
                  {cat.modules.length} chapitres
                </p>
              </div>
              {Icon && (
                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
