import "./App.css";

//3- importação de componenets

import FisrtsComponent from "./components/FisrtsComponent";

//5- destruturando props
import SecondComponents from "./components/SecondComponents";
import Destructuring, { Category } from "./components/Destructuring";
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

//9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1- Variaveis
  const name: string = "Paulo";
  const age: number = 23;
  const isWorking = true;

  //2- funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  //8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  const mySecondText: textOrNull = null;

  const testandoFixed: fixed = "Ou";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está Trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FisrtsComponent />
        <SecondComponents name="Paulo Ricardo" />
        <Destructuring
          title="Primeiro Post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.JS}
        />
        <State />
        {myText && <p>Tem Texto na variavel</p>}
        {mySecondText && <p>Tem Texto na variavel</p>}
        <h3>{testandoFixed}</h3>
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
