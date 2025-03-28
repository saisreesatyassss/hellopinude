'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English') // Default to English
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname() // Get the current pathname

  // Update selectedLanguage based on the current pathname
  useEffect(() => {
    if (pathname === '/hindi') {
      setSelectedLanguage('हिंदी')
    } else {
      setSelectedLanguage('English')
    }
  }, [pathname]) // Run whenever the pathname changes

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language) // Update the state
    setIsOpen(false) // Close the dropdown
    if (language === 'हिंदी') {
      router.push('/hindi') // Navigate to the Hindi page
    } else {
      router.push('/') // Navigate to the English page
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false) // Close dropdown if clicked outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center w-[120px] gap-2 border border-black rounded-full bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLanguage}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="listbox">
            {['English', 'हिंदी'].map((language) => (
              <button
                key={language}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="option"
                onClick={() => handleLanguageSelect(language)}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
