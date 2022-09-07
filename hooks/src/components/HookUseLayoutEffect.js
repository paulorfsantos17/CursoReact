import {useLayoutEffect, useEffect, useState} from 'react'

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum Nome")
  useEffect(() => {
    console.log("2")
    setName("Mudou de nome")
  }, [])

  useLayoutEffect(() => {
    console.log('1')
    setName("Outro Nome")
  }, [])

  console.log(name)
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect