import {useEffect, useState} from 'react'

const HookUseEffect = () => {
  useEffect(() => {
    console.log("estou sendo executar")
  })
  const [number, setNumber] = useState(1)
  const changeSomething = () => {
    setNumber(number + 1)
  }


  useEffect(() => {
    console.log("executei Apenas uma vez")
  }, [])

  const [anotherNumber , setAnotherNumber] = useState(0)

  useEffect(() => {
    if(anotherNumber > 0) {
      console.log("So executado apenas quando o anotherNumber muda")
    }
    
  }, [anotherNumber])


  useEffect(()=> {
    const timer = setTimeout(() => {
      console.log('Helo word')

      setNumber(number + 1)
      
    }, 2000)

    return () => clearTimeout(timer)
  }, [anotherNumber, number])
  return (
    <div>
      <h2>UseEffect</h2>
      <p>{number}</p>
      <button onClick={()=> changeSomething()}>Executar</button>
      <p>AnotherNumber: {anotherNumber}</p>
      <button onClick={()=> setAnotherNumber(anotherNumber + 1)} >Mudar anotherNumber</button>
      <hr />
    </div>
  )
}

export default HookUseEffect