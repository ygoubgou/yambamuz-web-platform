"use client"

import { Search, X } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import { searchSuggestions, categories } from "@/lib/data"

interface SearchBarProps {
  onSearch: (query: string) => void
  onNavigate?: (categoryId: string, moduleId?: string) => void
}

export function SearchBar({ onSearch, onNavigate }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [filteredResults, setFilteredResults] = useState<
    { label: string; type: "suggestion" | "course" | "module"; catId?: string; modId?: string }[]
  >([])
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim().length > 0) {
      const q = query.toLowerCase()
      const results: typeof filteredResults = []

      // Search suggestions
      searchSuggestions
        .filter((s) => s.toLowerCase().includes(q))
        .slice(0, 3)
        .forEach((s) => results.push({ label: s, type: "suggestion" }))

      // Search categories and modules
      categories.forEach((cat) => {
        if (cat.label.toLowerCase().includes(q)) {
          results.push({ label: cat.label, type: "course", catId: cat.id })
        }
        cat.modules.forEach((mod) => {
          if (mod.title.toLowerCase().includes(q) || mod.description.toLowerCase().includes(q)) {
            results.push({ label: mod.title, type: "module", catId: cat.id, modId: mod.id })
          }
        })
      })

      setFilteredResults(results.slice(0, 7))
    } else if (isFocused) {
      setFilteredResults(
        searchSuggestions.slice(0, 5).map((s) => ({ label: s, type: "suggestion" as const }))
      )
    } else {
      setFilteredResults([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, isFocused])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = useCallback(
    (result: (typeof filteredResults)[0]) => {
      setQuery(result.label)
      setIsFocused(false)
      if (result.catId && onNavigate) {
        onNavigate(result.catId, result.modId)
      } else {
        onSearch(result.label)
      }
    },
    [onSearch, onNavigate]
  )

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-lg">
      <div
        className={`flex items-center gap-3 rounded-full border bg-card px-5 py-3 transition-all duration-300 ${
          isFocused
            ? "border-primary/40 shadow-lg shadow-primary/5"
            : "border-border shadow-sm hover:shadow-md"
        }`}
      >
        <Search className="h-[18px] w-[18px] shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch(e.target.value)
          }}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(query)
              setIsFocused(false)
            }
          }}
          placeholder="Rechercher un cours, une video..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              onSearch("")
            }}
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isFocused && filteredResults.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          {filteredResults.map((result, i) => (
            <button
              key={i}
              onClick={() => handleSelect(result)}
              className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm transition-colors hover:bg-secondary"
            >
              <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <span className="flex-1 text-foreground">{result.label}</span>
              {result.type === "module" && (
                <span className="text-xs text-muted-foreground">Cours</span>
              )}
              {result.type === "course" && (
                <span className="text-xs text-muted-foreground">Categorie</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
