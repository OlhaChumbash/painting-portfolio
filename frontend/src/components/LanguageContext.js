import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext()

export const languages = {
  english: {
    code: "english",
    label: "English",
    short: "EN",
  },
  german: {
    code: "german",
    label: "Deutsch",
    short: "DE",
  },
  ukrainian: {
    code: "ukrainian",
    label: "Українська",
    short: "UA",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")

    if (
      savedLanguage === "english" ||
      savedLanguage === "german" ||
      savedLanguage === "ukrainian"
    ) {
      setLanguage(savedLanguage)
    }

    setMounted(true)
  }, [])

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const currentLanguage = languages[language]

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        currentLanguage,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}


// Language switcher
export default function LanguageSwitcher() {
  const {
    language,
    changeLanguage,
    currentLanguage,
    mounted,
  } = useLanguage()

  const [open, setOpen] = useState(false)

  if (!mounted) {
    return null
  }

  const handleChange = (newLanguage) => {
    changeLanguage(newLanguage)
    setOpen(false)
  }

  return (
    <div className="relative ml-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-dark shadow-sm transition hover:border-gray-300 dark:border-gray-700 dark:bg-dark dark:text-light"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span>{currentLanguage.short}</span>

        <span
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[100] mt-2 min-w-[150px] rounded-lg border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-dark">
          {Object.values(languages).map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleChange(item.code)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition ${
                language === item.code
                  ? "bg-gray-100 font-semibold dark:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="w-6">{item.short}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}