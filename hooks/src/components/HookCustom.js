import {useState} from 'react'
import { usePreview } from '../hooks/usePreview'

const HookCustom = () => {
  const [number, setNumber] = useState(0)

  const previousValue = usePreview(number)
  
  return (
    <div>
      <h2>CustomHook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue} </p>
      <button onClick={()=>setNumber(number + 1)}>Alterar</button>
      <hr />
    </div>
  )
}

export default HookCustom