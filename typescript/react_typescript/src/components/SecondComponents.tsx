import React from 'react'

interface Props {
  name: string
}

const SecondComponents = (props: Props) => {
  return (
    <div>
      <p>Meu Segundo componente.</p>
      <p>Meu nome é : {props.name} </p>
    </div>
    
  )
}

export default SecondComponents