// Component that allows to select mode: dark, light, system

import { useState } from 'react'
import { Listbox, ListboxOption, ListboxLabel } from './listbox'
import {
  SunIcon,
  MoonIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/24/outline'

const darkModeOptions = [
  { id: 1, name: 'Light', icon: SunIcon },
  { id: 2, name: 'Dark', icon: MoonIcon },
  { id: 3, name: 'System', icon: AdjustmentsVerticalIcon },
]

const DarkModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return (
      darkModeOptions.find(
        (option) => option.name.toLowerCase() === savedTheme,
      ) ?? darkModeOptions[2]
    ) // Default to system
  })
  const handleModeChange = (value: (typeof darkModeOptions)[number]) => {
    setSelectedMode(value)
    if (value.name === 'System') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', value.name.toLowerCase())
    }
    switch (value.name) {
      case 'Light':
        document.documentElement.classList.remove('dark')
        break
      case 'Dark':
        document.documentElement.classList.add('dark')
        break
      case 'System':
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
      default:
        break
    }
  }

  return (
    <div className='dark-mode-selector'>
      <Listbox value={selectedMode} onChange={handleModeChange}>
        {darkModeOptions.map((option) => (
          <ListboxOption
            key={option.id}
            value={option}
            onClick={() => {
              handleModeChange(option)
            }}
          >
            <option.icon className='w-5 h-5' />
            <ListboxLabel>{option.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  )
}

export default DarkModeSelector
