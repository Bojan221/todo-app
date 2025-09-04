import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function TodoListComponent({ taskList, setTaskList, counter, setCounter }) {
  const [doneTask, setDoneTask] = useState(0);

  function handleTaskDone(index) {
    setTaskList(
      taskList.map((t, i) => (i === index ? { ...t, done: true } : t))
    );
    setDoneTask(doneTask + 1);
  }

  return (
    <div>
      <div className="flex justify-between px-[30px] py-[15px]">
        <p className="text-[20px] font-semibold">Total Tasks: {counter}</p>
        <p className="text-[20px] text-green-500 font-semibold">
          Done Tasks: {doneTask}
        </p>
      </div>
      <div className="flex flex-col gap-[20px] px-[50px]">
        <AnimatePresence>
        {taskList.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.3 }}
            className={`${
              task.done ? "bg-green-500" : "bg-red-500"
            } flex justify-between items-center rounded-[20px] px-[30px] py-[15px]`}
          >
            <p className="text-[20px] text-white font-semibold">{task.text}</p>
            <div className="flex items-center gap-[20px]">
              <FaTrash
                size={24}
                color="white"
                className="cursor-pointer"
                onClick={() => {
                  setTaskList(taskList.filter((_, i) => i !== index));
                  setCounter(counter - 1);
                  if (task.done) {
                    setDoneTask(doneTask - 1);
                  }
                }}
              />
              <button
                className={`${
                  task.done
                    ? "text-gray-200 line-through"
                    : "cursor-pointer text-white"
                } text-[20px] font-semibold`}
                onClick={() => handleTaskDone(index)}
                disabled={task.done}
              >
                Done
              </button>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TodoListComponent;
