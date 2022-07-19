import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <button onClick={() => setCounter(counter + 1)}> Adicionar valor </button>
  )
}
 export default ChangeCounter
