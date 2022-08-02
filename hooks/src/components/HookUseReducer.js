import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTaks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];
  const [taskText, setTaskText] = useState("")

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD": 
      const newTask = {
        id: Math.random(),
        text: taskText
      }

      setTaskText("")
      return [...state, newTask]

      case "DELETE" : 

      return state.filter(task => task.id !== action.id)

      default: 
      return state
      
      
    }
  };

  const handleSubmit= (e) => {
    e.preventDefault()

    dispatchTask({type: "ADD"})
  }

  const RemoveTask= (id) => {
    dispatchTask({type: "DELETE", id})
  }

  const [tasks, dispatchTask] = useReducer(taskReducer, initialTaks);
  
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar Numero</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setTaskText(e.target.value)} value={taskText} />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => RemoveTask(task.id)}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
