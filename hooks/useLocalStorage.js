// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/hooks/useLocalStorage.js

import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(initialValue)
  
  // Initialize from localStorage after component mounts (SSR-safe)
  useEffect(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      // If error, keep initial value
      console.log(error)
    }
  }, [key])

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
