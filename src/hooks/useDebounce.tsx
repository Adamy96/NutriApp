// @ts-nocheck
import { useRef } from 'react'

const useDebounce = (fn, delay) => {
  const timeoutRef = useRef(null)

  const debouncedFn = (...args) => {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFn
}

export default useDebounce
