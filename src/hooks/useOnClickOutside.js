import { useEffect } from 'react'

export const useOnClickOutside = (ref, dependence, handler) => {
  const onClickOutside = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return
    }
    document.removeEventListener('mousedown', onClickOutside)
    document.removeEventListener('touchstart', onClickOutside)
    handler()
  }

  useEffect(() => {
    if (dependence) {
      document.addEventListener('mousedown', onClickOutside)
      document.addEventListener('touchstart', onClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('touchstart', onClickOutside)
    }
  }, [dependence])
}
