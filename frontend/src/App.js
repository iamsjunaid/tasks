import React from "react";
import Tasks from "./components/tasks/tasks";
import NewTask from "./components/tasks/new-task";

export default function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-around bg-gray-300">
      <div className="border flex items-center justify-center h-4/5 rounded overflow-hidden shadow-lg bg-white p-4 w-[94%]">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
