import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "José"])

    const [users, setUsers] = useState([
            {id: 1, name: "Matheus", age: 25},
            {id: 2, name: "Paulo", age: 35},
            {id: 3, name: "José", age: 25},
        ])

    const handleDeleteRandon = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>                
                ))}
            </ul>
            <button onClick={handleDeleteRandon}>Delete Random user</button>
        </div>
    )
}

export default ListRender