import { useState } from "react";
import TodoInputComponent from "./components/TodoInputComponent";
import TodoListComponent from "./components/TodoListComponent";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-[50px] mb-[50px]">
      <TodoInputComponent
        taskList={taskList}
        setTaskList={setTaskList}
        counter={counter}
        setCounter={setCounter}
      />
      <TodoListComponent
        taskList={taskList}
        setTaskList={setTaskList}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;
