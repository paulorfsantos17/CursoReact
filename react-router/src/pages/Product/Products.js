import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


const Products = () => {
  const {id} = useParams()

  const url = 'http://localhost:3000/products/' + id
  const {data:product, loading, error} = useFetch(url)
  console.log(product)

  return (
    <>
      <p>Esse é o ID do Produto: {id}</p>
      {error && <p> Ocorreu um erro aqui</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          <Link to={`/products/${product.id}/info`} > Mais informaçoes</Link>
        </div>
      )}
    </>
  )
}

export default Products