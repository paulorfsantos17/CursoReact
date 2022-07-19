import {useContext} from 'react'
import  ChangeCounter  from '../components/ChangeCounter'
import CounterContext from '../context/CounterContext'

const PageThree = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div className='main'>
    <h1>Three</h1>
    <p>Valor do contador: {counter}</p>
    <ChangeCounter />
  </div>
  )
}

export default PageThree