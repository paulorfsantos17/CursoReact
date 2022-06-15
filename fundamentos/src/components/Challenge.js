import React from 'react'

const Challenge = () => {
    const numberA = 5
    const numberB = 6
    const handleAdd = () => {
        console.log(numberA +  numberB)
    }
    


    return (
        <div>
            <h1>Challenge</h1>
            <p> O primeiro valor é: {numberA}</p>
            <p> O primeiro valor é: {numberB}</p>
            <div>
                <button onClick={handleAdd}>Click Para somar</button>
            </div>
        </div>
    )
}

export default Challenge