// @ts-nocheck
import { useRef, useEffect } from 'react'

const useClickOutside = (handler: any) => {
  const domNode = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const maybeHandler = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}

export default useClickOutside