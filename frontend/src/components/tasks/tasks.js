import React, { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

import { getAllTasks, updateTask, deleteTask } from "../../api/tasks";
import UpdateTaskForm from "./update-task-form";

function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (err) {
        setError("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const handleUpdateClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleTaskUpdate = async (taskId, updatedStatus) => {
    console.log("taskId", taskId);
    console.log("updatedStatus", updatedStatus);
    try {
      await updateTask(taskId, { status: updatedStatus });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: updatedStatus } : task
        )
      );
      handleCloseModal();
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  const handleDeleteClick = async (task) => {
    try {
      await deleteTask(task.id);
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleSort = () => {
    setTasks((prevTasks) => [...prevTasks].reverse());
  };

  return (
    <div className="bg-white rounded-lg border border-gray-400 px-4 py-4 w-[66%] mx-auto h-4/5">
      <h2 className="text-xl font-semibold my-2">Manage Tasks</h2>
      <table className="mx-auto border-separate border-spacing-4 w-full">
        <thead>
          <tr className="border-b">
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th className="flex justify-evenly items-center">
              <p>Created At</p>
              <span className="cursor-pointer text-center">
                <HiOutlineChevronUpDown
                  className="w-6 h-6 hover:text-white hover:bg-gray-400 hover:rounded-full"
                  onClick={handleSort}
                />
              </span>
            </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{new Date(task.created_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleUpdateClick(task)}>
                  <RiEdit2Line className="w-8 h-8 hover:text-white hover:bg-gray-400 hover:rounded-full p-1" />
                </button>
                <button
                  onClick={() => handleDeleteClick(task)}
                  className="ml-4"
                >
                  <RiDeleteBinLine className="w-8 h-8 hover:text-white hover:bg-gray-400 hover:rounded-full p-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <UpdateTaskForm
          task={selectedTask}
          onClose={handleCloseModal}
          onUpdate={handleTaskUpdate}
        />
      )}
    </div>
  );
}

export default Tasks;
