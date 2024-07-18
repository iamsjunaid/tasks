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
    <div className=" w-[24rem] bg-white rounded-lg border border-gray-400 px-4 py-16">
      <form className="flex flex-col items-center justify-center w-full gap-8">
        <div className="flex justify-between items-center gap-4 w-full">
          <label>Title</label>
          <input type="text" className="w-[14rem] border border-gray-400 rounded" ref={titleRef}/>
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <label>Description</label>
          <textarea type="text" className="border w-[14rem] h-1/2 border-gray-400 rounded" ref={descriptionRef}/>
        </div>
        <div className="flex justify-between items-center gap-4 w-full ">
          <Button type="submit" className="mx-auto" onSubmit={handleSubmit}>Save
            <span></span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
