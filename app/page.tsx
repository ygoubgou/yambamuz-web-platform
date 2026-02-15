"use client"

import { useState, useCallback } from "react"
import { GraduationCap, Gamepad2, PenTool, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { SectionApprendre } from "@/components/section-apprendre"
import { SectionSamuser } from "@/components/section-samuser"
import { SectionContribuer } from "@/components/section-contribuer"

type View = "home" | "apprendre" | "samuser" | "contribuer"

const navButtons = [
  { id: "apprendre" as const, label: "Apprendre", emoji: "📘", icon: GraduationCap },
  { id: "samuser" as const, label: "S'amuser", emoji: "🎮", icon: Gamepad2 },
  { id: "contribuer" as const, label: "Contribuer", emoji: "✍️", icon: PenTool },
]

export default function Page() {
  const [view, setView] = useState<View>("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [navCatId, setNavCatId] = useState<string | null>(null)
  const [navModId, setNavModId] = useState<string | null>(null)

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleNavigate = useCallback((categoryId: string, moduleId?: string) => {
    setNavCatId(categoryId)
    setNavModId(moduleId ?? null)
    setView("apprendre")
  }, [])

  const goHome = useCallback(() => {
    setView("home")
    setSearchQuery("")
    setNavCatId(null)
    setNavModId(null)
  }, [])

  // Section views (Level 2+)
  if (view !== "home") {
    return (
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex flex-1 flex-col px-4 pb-16">
          {/* Back + section title */}
          <div className="mx-auto mb-8 w-full max-w-2xl">
            <button
              onClick={goHome}
              className="mb-6 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Accueil
            </button>

            {view === "apprendre" && (
              <div className="mb-8">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">
                  {"📘 Apprendre"}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Explorez nos cours et ressources
                </p>
              </div>
            )}
            {view === "samuser" && (
              <div className="mb-8">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">
                  {"🎮 S'amuser"}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Detendez-vous avec notre selection
                </p>
              </div>
            )}
            {view === "contribuer" && (
              <div className="mb-8">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">
                  {"✍️ Contribuer"}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Participez au projet Yambamuz
                </p>
              </div>
            )}
          </div>

          {/* Section content */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {view === "apprendre" && (
              <SectionApprendre
                searchFilter={searchQuery}
                initialCategoryId={navCatId}
                initialModuleId={navModId}
              />
            )}
            {view === "samuser" && <SectionSamuser />}
            {view === "contribuer" && <SectionContribuer />}
          </div>
        </main>

        <footer className="px-6 py-6 text-center text-xs text-muted-foreground">
          {"Yambamuz \u2014 Apprendre, s'amuser, contribuer."}
        </footer>
      </div>
    )
  }

  // Home view (Level 1)
  return (
    <div className="flex min-h-svh flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-20">
        {/* Logo */}
        <h1 className="mb-2 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Yambamuz
        </h1>
        <p className="mb-10 text-muted-foreground">
          {"Apprendre. S'amuser. Contribuer."}
        </p>

        {/* Search */}
        <div className="mb-12 w-full max-w-lg">
          <SearchBar onSearch={handleSearch} onNavigate={handleNavigate} />
        </div>

        {/* Three main buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {navButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setView(btn.id)}
              className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="text-base">{btn.emoji}</span>
              {btn.label}
            </button>
          ))}
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-muted-foreground">
        {"Yambamuz \u2014 Apprendre, s'amuser, contribuer."}
      </footer>
    </div>
  )
}
