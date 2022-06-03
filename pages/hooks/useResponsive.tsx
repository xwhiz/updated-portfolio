import { useEffect, useState } from 'react'

export default function useResponsive(isWidth: number) {
  const [isRequiredWidth, setIsRequiredWidth] = useState(false)
  useEffect(() => {
    if (window) {
      const handleResize = () => {
        if (window.innerWidth < isWidth) setIsRequiredWidth(true)
        else setIsRequiredWidth(false)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isRequiredWidth
}
