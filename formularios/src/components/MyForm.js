import './MyForm.css'

import React, { useState } from 'react'

const MyForm = ({user}) => {
    const [name, setName] = useState( user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = e => {
        let name = e.target.value
        setName(name)
    }
    const handleEmail = e => {
        let email = e.target.value
        setEmail(email)
    }
    const handleBio = e => {
        let bio = e.target.value
        setBio(bio)
    }

    const handleRole = e => {
        let role =e.target.value
        setRole(role)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite seu nome...' 
                    onChange={handleName}
                    value={name}
                />
                </div>
                <label>
                    <span>Email:</span>
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Digite o seu Email' 
                        onChange={handleEmail}
                        value={email}
                    />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio"  placeholder='Digite sua Bio...' onChange={handleBio} value={bio}></textarea>
                </label>
                <label >
                    <span>Função do Sistema:</span>
                    <select name="role" onChange={handleRole} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm