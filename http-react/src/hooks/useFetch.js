import {useState, useEffect} from 'react'

//4- custom hooks

export const useFetch = (url) => {
  const[data, setData] = useState(null)
  
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch]= useState(false)

  const [loading, Setloading] =  useState(false)

  const [error, setError] = useState(null)

  const httpConfig = (data, method) => {
    

    if(method ==="POST" || method === 'DELETE'){
      setConfig({
        method,
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
        id: data.id
      })
      
      setMethod(method)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      Setloading(true)
      
    try {
      const res = await fetch(url)
      const json = await res.json()

      setData(json)
    }catch(e) {
      setError("Houve algum erro no carregamento dos dados!")
    }
      Setloading(false)
    }

    fetchData()
  }, [url, ,callFetch])

  useEffect(() => {
      const httpRequest = async() => {
        
        if(method === 'POST') {

          let fetchOptions = [url, config]
          const res =  await fetch(...fetchOptions)
          const  json = await res.json()
          setCallFetch(json)
        }
        if(method === "DELETE") {
          let fetchOptions = [`${url}/${config.id}`, config]
          
          const res =  await fetch(...fetchOptions)
          const  json = await res.json()
          setCallFetch(json)
        }
      }
      httpRequest()
    }, [config, method, url])
    return {data , httpConfig, loading, error}
}