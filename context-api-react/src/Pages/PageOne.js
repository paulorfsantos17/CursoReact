// import {useContext} from 'react'
import  ChangeCounter  from '../components/ChangeCounter'
// import CounterContext from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext';

const PageOne = () => {
  // const {counter} = useContext(CounterContext)

  const {color, dispatch} = useTitleColorContext();

  const setTitleColor = color => {
    dispatch({type: color})
  }

  const {counter} = useCounterContext();
  return (
    <div className='main'>
      <h1 style={{color: color}}>PageOne</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      <div>
        <button onClick={() => setTitleColor("RED")}> Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}> Blue</button>
      </div>
    </div>
  )
}

export default PageOne