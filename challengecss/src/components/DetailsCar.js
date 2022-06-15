import React from 'react'
import styles from './DetailsCar.module.css'

const DetailsCar = ({name, brand, color}) => {
    return (
        <div className={styles.card_car}>
            <h1 className={styles.my_title}>Carro </h1>
            <h2 className={styles['name_car']}>Nome: {name}</h2>
            <p>Marca: {brand}</p>
            <p>Cor: {color}</p>
        </div>
    )
}

export default DetailsCar