import React, { useEffect, useState } from "react";
import { getAllTasks, updateTask } from "./api/tasks";
import Tasks from "./components/tasks/tasks";
import NewTask from "./components/tasks/new-task";

export default function App() {
  // const [tasks, setTasks] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const tasksData = await getAllTasks();
  //       setTasks(tasksData);
  //     } catch (err) {
  //       setError("Failed to fetch tasks");
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  // const handleUpdateClick = async (e, task) => {
  //   e.preventDefault();
  //   const taskId = task.id;
  //   const status = task.status;
  //   await updateTask(taskId, status);
  //   onClose();
  // };

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className="h-screen flex flex-col items-center justify-around bg-gray-300">
      <div className="border flex items-center justify-center h-4/5 rounded overflow-hidden shadow-lg bg-white p-4 w-[94%]">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
