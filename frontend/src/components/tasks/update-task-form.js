import React, { useState } from "react";

function UpdateTaskForm({ task, onClose, onUpdate }) {
  const [status, setStatus] = useState(task.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(task.id, status);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg border border-gray-400 px-4 py-4 w-[18rem]">
        <form
          className="flex flex-col items-center justify-center w-full gap-8"
          onSubmit={handleSubmit}
        >
          <span className="m-2 cursor-pointer self-start" onClick={onClose}>
            Close
          </span>
          <div className="flex justify-around items-center gap-4 w-full">
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTaskForm;
