import './App.css';
import MyForm from './components/MyForm';

function App() {
  const user = {name: "Paulo Santos", email: "Paulo@email.com", bio: "Sou Programador", role: 'admin'}
  return (
    <div className="App">
      <h1>Formulario</h1>
      <MyForm user={user}></MyForm>
    </div>
  );
}

export default App;
