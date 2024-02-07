import { useState, useEffect } from 'react'

export default function useDebounceText(value: string, delay: number) {
  const [ debouncedTextValue, setDebouncedTextValue ] = useState(value)
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedTextValue(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    },
    [ delay, value ]
  )

  return debouncedTextValue
}
