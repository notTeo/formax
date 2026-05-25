import { createContext, useContext, useState } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('formax_lang') : null
  const [lang, setLangState] = useState(stored === 'el' ? 'el' : 'en')

  const setLang = (next) => {
    const val = typeof next === 'function' ? next(lang) : next
    setLangState(val)
    localStorage.setItem('formax_lang', val)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
