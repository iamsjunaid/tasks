import { useRef } from "react";
import { createTask } from "../../api/tasks";
import Button from "../button/button";

function NewTask() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const task = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    createTask(task);
    form.reset();
  }

  return (
    <div className=" w-[24rem] bg-white rounded-lg border border-gray-400 px-4 py-8">
      <form className="flex flex-col items-center justify-center w-full gap-8">
        <h2 className="text-xl font-semibold">Add A New Task</h2>
        <div className="flex justify-between items-center gap-4 w-full">
          <label>Title</label>
          <input type="text" placeholder="Enter a title..." className="w-[14rem] border border-gray-400 rounded" ref={titleRef} required/>
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <label>Description</label>
          <textarea type="text" placeholder="Type a description..." className="border w-[14rem] h-1/2 border-gray-400 rounded" ref={descriptionRef} required/>
        </div>
        <div className="flex justify-between items-center gap-4 w-full ">
          <Button type="submit" className="mx-auto" onSubmit={handleSubmit}>Save Task
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
