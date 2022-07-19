import {useContext} from 'react'
import  ChangeCounter  from '../components/ChangeCounter'
import CounterContext from '../context/CounterContext'

const PageTwo = () => {

  const {counter} = useContext(CounterContext)
  return (
    <div className='main'>
    <h1>PageTwo</h1>
    <p>Valor do contador: {counter}</p>
    <ChangeCounter />
  </div>
  )
}

export default PageTwo