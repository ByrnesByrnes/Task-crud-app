import React, {useRef, useEffect} from 'react';

export const UseClickOutside = (handler, scroll=false) => {

  let domNode = useRef()
 
  useEffect(() => {

    const checkHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler(false)
      }
    }
    document.addEventListener('mousedown', checkHandler)

    return () => document.removeEventListener('mousedown', checkHandler)
  }, [handler])

  return domNode
}