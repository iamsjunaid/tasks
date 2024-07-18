import axios from "axios";

export async function getAllTasks() {
  const res = await axios.get("https://tasks-mbgm.onrender.com/api/tasks");
  return res.data;
}

export async function createTask(task) {
  const res = await axios.post("https://tasks-mbgm.onrender.com/api/tasks", task);
  return res.data;
}

export async function updateTask(taskId, updatedStatus) {
  console.log("taskId", taskId);
  console.log("updatedStatus", updatedStatus);
  const res = await axios.put(`https://tasks-mbgm.onrender.com/api/tasks/${taskId}`, updatedStatus);
  return res.data;
}


export async function deleteTask(taskId) {
  const res = await axios.delete(`https://tasks-mbgm.onrender.com/api/tasks/${taskId}`);
  return res.data;
}

