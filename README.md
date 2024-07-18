# Task Management App

A simple task management application built with FastAPI for the backend and React for the frontend. The backend uses Firebase Realtime Database to store and manage tasks.

## Features

- Create, update, and delete tasks
- Display tasks in a table format
- Edit tasks via a modal form
- Real-time updates with Firebase

## Technologies Used

- **Backend**: FastAPI, Firebase Realtime Database
- **Frontend**: React, Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python and pip installed
- Firebase account with Realtime Database set up
- Service account key for Firebase

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app/backend
    ```

2. **Create a virtual environment**:
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

3. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up Firebase**:
    - Obtain your service account key JSON file from Firebase.
    - Create a `.env` file in the `backend` directory with the following content:
      ```env
      SERVICE_ACCOUNT_KEY='your_service_account_key_json_content'
      DATABASE_URL='https://your-database-name.firebaseio.com'
      ```

5. **Run the FastAPI server**:
    ```bash
    uvicorn main:app --reload
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Run the React development server**:
    ```bash
    npm start
    ```

### Deployment to Vercel

1. **Install Vercel CLI**:
    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel**:
    ```bash
    vercel login
    ```

3. **Deploy the project**:
    - Navigate to the `backend` directory and deploy the backend:
      ```bash
      cd backend
      vercel --prod
      ```

    - Navigate to the `frontend` directory and deploy the frontend:
      ```bash
      cd ../frontend
      vercel --prod
      ```

4. **Set environment variables on Vercel**:
    - Go to the Vercel dashboard.
    - Select your project.
    - Go to Settings > Environment Variables and add the following variables:
      ```env
      SERVICE_ACCOUNT_KEY='your_service_account_key_json_content'
      DATABASE_URL='https://your-database-name.firebaseio.com'
      ```

## API Endpoints

- **GET /api/tasks**: Fetch all tasks.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/{task_id}**: Update a task's status.
- **DELETE /api/tasks/{task_id}**: Delete a task.

## How to Use

1. **Create a Task**:
    - Open the frontend application.
    - Fill out the form to create a new task and submit.

2. **Update a Task**:
    - Click the "Edit" button next to the task you want to update.
    - Change the status and submit the form.

3. **Delete a Task**:
    - Click the "Delete" button next to the task you want to delete.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
