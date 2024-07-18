import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../button/button";

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
          <MdClose className="w-10 h-10 p-2 hover:text-white hover:bg-gray-400 hover:rounded-full cursor-pointer" onClick={onClose} />
          <div className="flex justify-around items-center gap-4 w-full">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-400 hover:border-gray-800 rounded w-32">
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex justify-end w-full">

            <Button type="submit" className="mx-auto" onSubmit={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTaskForm;
