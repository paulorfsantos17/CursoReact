import { useEffect, useRef,  useDebugValue} from "react";

export const usePreview = (value) => {
  
  const ref = useRef()
  useDebugValue("---CustomHook  E useDebugValue--- ")
  useDebugValue("o numero anterior é "  + value)
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}