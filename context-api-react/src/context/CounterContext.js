import {  createContext, useState } from "react"
const CounterContext  = createContext()

export default CounterContext

export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState(5)
  return (
    <CounterContext.Provider value={{counter, setCounter}} >
      {children}
    </CounterContext.Provider>
  )
}