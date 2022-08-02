import { useState } from "react";

const HookUseState = () => {
  let userName = "João";
  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName="João Souza"
    setName("Paulo Santos")
  }

  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()
    //envio de uma api
    console.log(age)
  }

  return (
    <div>
      <h2>useState</h2>
      <p>Variavel: {userName}</p>
      <p>useState : {name} </p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <form onSubmit={handleSubmit} >
        <input type="text" value={age} onChange={(e)=> setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>

      <hr />
    </div>
  );
};

export default HookUseState;
