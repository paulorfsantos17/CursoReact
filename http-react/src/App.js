
import './App.css';
import {useState, useEffect} from 'react'
import {useFetch} from './hooks/useFetch'

const url = "http://localhost:3000/products"



function App() {
  const [products , setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const {data: items, httpConfig, loading, error} = useFetch(url)


  //add
  async function handleSubmit (e){
    e.preventDefault()
    const product = {
      name,
      price
    }
  


    httpConfig(product, "POST")
    setName('')
    setPrice('')
  }

  async function handleDelete(product){
    
    httpConfig(product,"DELETE")
  }

  return (
    <div className="App">
      <h1>
        Lista de produtos
      </h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando dados...</p>}
      {!error && 
        <ul>
          {items && items.map(product => {
            return(<li key={product.id}>{product.name} - {product.price}
            <button onClick={() => handleDelete(product)}> Deletar</button>
            </li>)
          })}
        </ul>
      }
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={e => setName(e.target.value)} />
          </label>
          <label >
            Preço:
            <input type="number" value={price} name='preco' onChange={e => setPrice(e.target.value)}/>
          </label>
          {!loading && <input type="submit" value="criar" />}
          {loading && <input type="submit" value="Aguarde..." disabled />}
          
        </form>
      </div>
    </div>
  );
}

export default App;
