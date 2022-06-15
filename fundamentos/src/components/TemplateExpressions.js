import React from 'react'
import MyComponents from './MyComponents'

const TemplateExpressions = () => {
    const name = "Paulo"
    const data = {
        age: 31,
        job: "Programador"
    }
    return (
        <div>
            <h1>Olá, { name }, Tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>E tem {data.age} anos!</p>
            <MyComponents></MyComponents>
        </div>
        
    )
}

export default TemplateExpressions
