from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.crud import get_tasks, create_task as crud_create_task, update_task as crud_update_task, delete_task
from app.firebase_init import ref  # Ensure the Firebase initialization runs

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class TaskCreate(BaseModel):
    title: str
    description: str

class TaskUpdate(BaseModel):
    status: str

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
    success = delete_task(task_id)
    if not success:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted successfully"}
