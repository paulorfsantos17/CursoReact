import { useState } from "react";
import style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUptade, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean): void => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask=(id: number, title: string , difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = taskList.map(task => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal
        children={
          <TaskForm
            btnText="Atualizar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            task={taskToUptade}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
