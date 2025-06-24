// /context/NavigationContext.js
import { createContext, useContext, useState } from 'react'

// NavigationContext provides global state for navigation menu position
export const NavigationContext = createContext({
  showNavTopRight: false,
  setShowNavTopRight: () => {},
})

export function NavigationProvider({ children }) {
  const [showNavTopRight, setShowNavTopRight] = useState(false)
  return (
    <NavigationContext.Provider value={{ showNavTopRight, setShowNavTopRight }}>
      {children}
    </NavigationContext.Provider>
  )
}

// Custom hook for easy access
export function useNavigation() {
  return useContext(NavigationContext)
} 