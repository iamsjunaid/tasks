import React from "react";
import Tasks from "./components/tasks/tasks";
import NewTask from "./components/tasks/new-task";

export default function App() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold my-4 underline underline-offset-4">Tasks Tracker</h2>
      <div className="flex items-start justify-center  rounded overflow-hidden shadow-lg bg-gray-300 p-4 w-full h-screen">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
