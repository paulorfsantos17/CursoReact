import {useRef} from 'react'

import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {
  const componentRef = useRef()

  return (
    <div>
      <h2>UseHiperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validade()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHandle