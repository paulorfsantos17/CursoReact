
import './App.css';
import {useState} from 'react'
import DetailsCar from './components/DetailsCar';

function App() {
  const [cars] = useState([
    {name:"Gol" , brand:"VW" , color:"Azul"},
    {name:"Palio" , brand:"Fiat" , color:"White"},
    {name:"Up" , brand:"VW" , color:"Black"}
  ])


  return (
    <div id="app">
      <h1 className='my-tittle'>Desafio CSS</h1>
      { cars.map(car => 
        <DetailsCar name={car.name} brand={car.brand}  color={car.color}/>
      )}
    </div>  
    
  );
}

export default App;
