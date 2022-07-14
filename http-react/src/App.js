
import './App.css';
import {useState, useEffect} from 'react'
import {useFetch} from './hooks/useFetch'

const url = "http://localhost:3000/products"



function App() {
  const [products , setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const {data: items, httpConfig} = useFetch(url)

  //add
  async function handleSubmit (e){
    e.preventDefault()

    const product = {
      name,
      price
    }

    // const res = await fetch(url,{
    //   method:"POST",
    //   headers:{
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    
    // // 3- carregamento dinamico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts,addedProduct])
    httpConfig(product, "POST")

    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>
        Lista de produtos
      </h1>
      <ul>
        {items && items.map(product => {
          return<li key={product.id}>{product.name} - {product.price}</li>

        })}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={e => setName(e.target.value)} />
          </label>
          <label >
            Preço:
            <input type="text" value={price} name='preco' onChange={e => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
