'use client'

import { createContext, useState, useContext } from 'react'

interface LoadingContextType {
  setLoading: (loading: boolean) => void
  loading: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
})

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [loading, setLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
