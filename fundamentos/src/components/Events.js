import React from 'react'

const Events = () => {
    const handleMyEvent = () => {
        console.log('Ativou o Evento')
    }
    const handleSomething = x => {
        if(x) {
            return <h1>Posso Renderizar Isto</h1>
        } else {
            return <h1>Ou isto</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui!</button>
            </div>
            {handleSomething(true)}
            {handleSomething(false)}
        </div>
    )
}

export default Events