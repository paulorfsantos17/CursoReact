import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFuction from './components/ExecuteFuction';
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState';
import { useState } from 'react';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [
      { id:1, brand : "Fiat", km: 2500, color: "Branco" },
      { id:2, brand : "BMW", km: 0, color: "Azul", newCar : true },
      { id:3, brand : "porshe", km: 450, color: "Laranja" },
    ]

    const users = [
      {id:1, name: "Paulo", age: 21, occupation: "Desenvolvedor" },
      {id:2, name: "José", age: 17, occupation: "Graçom" },
      {id:3, name: "Maria", age: 19, occupation: "Secretaria" },
      {id:4, name: "Elias", age: 16, occupation: "Auxiliar Geral" }

  ]

    const handleShowMessage = () => {
      console.log("Mensagem ativada!!")
    }

    const[message, setMessage] = useState("")

    const handleMessage = msg => {
      setMessage(msg)
    }

  return (
    <div className="App">
      <h1>Avançando com React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      <ShowUserName name="Paulo"></ShowUserName>
      <CarDetails brand="VW" km={10000} color="Azul" ></CarDetails>
      <CarDetails brand="VW" km={10000} color="Azul" newCar={true}></CarDetails>
      {cars.map(car=> (
        <CarDetails brand={car.brand}  km={car.km} color={car.color} newCar={car.newCar} key ={car.id}/>
      ))}
      <Fragments></Fragments>
      <Container>
        <p>Este é o conteudo!</p>
      </Container>
      <ExecuteFuction myFunction={handleShowMessage}></ExecuteFuction>
      {/*state lift*/}
      <Message msg={message}></Message>
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>
      {users.map(user=> (
        <UserDetails name={user.name}  age={user.age} occupation={user.occupation}  key ={user.id}/>
      ))}
      
    </div>
  );
}

export default App;
