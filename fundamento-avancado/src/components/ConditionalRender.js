import React, { useState } from 'react'

const ConditionalRender = () => {
    const [condition] = useState(false)

    const [name] = useState('Paulo')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {condition && <p> Se Condition for true, sim!</p>}
            {!condition && <p> A condição e falsa</p>}
            {name === 'João' ? (
                <div>
                    <h1>O nome é João</h1>
                </div>
            ) : (
                <div>
                    <h1>O nome não encontrado</h1>
                </div>    
            )}
        </div>
    )
}

export default ConditionalRender