import React, { useState } from "react";

function TodoInputComponent({ taskList, setTaskList, counter, setCounter }) {
  const [currentTask, setCurrentTask] = useState("");

  function addTask() {
    if (currentTask.trim() === "") return;
    setTaskList([
      ...taskList,
      {
        text:
          currentTask.trim().charAt(0).toUpperCase() +
          currentTask.trim().slice(1),
        done: false,
      },
    ]);
    setCurrentTask("");
    setCounter(counter + 1);
  }

  return (
    <div className="bg-yellow-100 py-[50px]">
      <div className="flex justify-center py-[25px]">
        <h1 className="text-[50px] font-bold text-red-500">TODO APP</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex border border-slate-300 rounded-[20px]  bg-white">
          <input
            type="text"
            placeholder="Enter your task"
            className="text-[20px] px-[20px] py-[10px] placeholder:text-[20px] rounded-[20px]"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <button
            className="bg-red-500 text-[20px] font-bold text-white px-[20px] py-[10px] rounded-[20px]"
            onClick={addTask}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInputComponent;
