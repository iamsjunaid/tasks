import firebase_admin
from firebase_admin import db
from firebase import ref
import time

def get_tasks():
    tasks = ref.get()
    if tasks:
        return [{"id": key, **value} for key, value in tasks.items()]
    return []

def create_task(title: str, description: str):
    print(title, description)
    current_time = int(time.time() * 1000)  
    new_task_ref = ref.push()
    new_task_ref.set(
        {
            "title": title,
            "description": description,
            "status": "todo",
            "created_at": current_time,
        }
    )
    return {"id": new_task_ref.key}

def update_task(task_id: str, status: str):
    task_ref = ref.child(task_id)
    task = task_ref.get()
    if task:
        task_ref.update({"status": status})
        updated_task = task_ref.get()  # Fetch the updated task
        updated_task["id"] = task_id
        return updated_task
    return None

def delete_task(task_id: str):
    task_ref = ref.child(task_id)
    if task_ref.get():
        task_ref.delete()
        return True
    return False
