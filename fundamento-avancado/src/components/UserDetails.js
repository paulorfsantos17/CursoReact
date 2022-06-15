import React from 'react'

const UserDetails = ({name, age, occupation}) => {
    
    return (
        <div>
            <h3>Nome: {name}</h3>
            <p>Age: {age}</p>
            <p>Profissão: {occupation}</p>
            {age >= 18 && <p> Pode Tirar Carteira</p>}
        </div>

    )
}

export default UserDetails