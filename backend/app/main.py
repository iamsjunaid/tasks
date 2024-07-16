from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from crud import get_tasks, create_task as crud_create_task, update_task as crud_update_task, delete_task as crud_delete_task
app = FastAPI() 

class Task(BaseModel):
    id: str
    title: str
    description: str
    status: str
    created_at: int

class TaskUpdate(BaseModel):
    status: str

class TaskCreate(BaseModel):
    title: str
    description: str

@app.get("/api/tasks")
def read_tasks():
    tasks = get_tasks()
    return tasks

@app.post("/api/tasks")
def create_task_endpoint(task: TaskCreate):
    new_task = crud_create_task(task.title, task.description)
    return new_task

@app.put("/api/tasks/{task_id}")
def update_task_endpoint(task_id: str, task: TaskUpdate):
    updated_task = crud_update_task(task_id, task.status)
    if not updated_task:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task

@app.delete("/api/tasks/{task_id}")
def delete_task_endpoint(task_id: str):
    success = crud_delete_task(task_id)
    if not success:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted successfully"}
