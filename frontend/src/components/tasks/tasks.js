import React, { useEffect, useState } from "react";
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
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-400 px-4 py-4 w-[66%] mx-auto h-4/5">
      <table className="mx-auto border-separate border-spacing-4 border w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{new Date(task.created_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleUpdateClick(task)}>u</button>
                <button onClick={() => handleDeleteClick(task)}className="ml-4">x</button>
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
