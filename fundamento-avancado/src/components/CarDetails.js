import React from 'react'

const CarDetails = ({brand, km, color, newCar, id}) => {
    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <ul >
                <li >
                    Marca: {brand}
                </li>
                <li>
                    KM:{km}
                </li>
                <li>
                    Cor: {color}
                </li>
                {newCar && <p>Esse caro é novo</p>}
            </ul>
        </div>
    )
}

export default CarDetails