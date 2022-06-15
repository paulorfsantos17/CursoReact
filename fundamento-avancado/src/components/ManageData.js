import React, { useState } from 'react'

const ManageData = () => {
    const [number, setNumber] = useState(15)
    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(35)}>Mudar Valor</button>
        </div>
    )
}

export default ManageData