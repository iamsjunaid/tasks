# Task Management App

A simple task management application built with FastAPI for the backend and React for the frontend. The backend uses Firebase Realtime Database for data storage and management.

## Features

- Create, update, and delete tasks.
- View all tasks in a tabular format.
- Update task status with a modal form.
- Responsive design with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Python and pip installed on your machine.
- Firebase account with a Realtime Database set up.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/iamsjunaid/tasks.git
    cd tasks
    ```

2. Set up the backend:

    a. Navigate to the backend directory:
        ```bash
        cd backend
        ```

    b. Create a virtual environment and activate it:
        ```bash
        python -m venv venv
        source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
        ```

    c. Install the required dependencies:
        ```bash
        pip install -r requirements.txt
        ```

    d. Create a `.env` file in the backend directory with your Firebase credentials:
        ```plaintext
        SERVICE_ACCOUNT_KEY='{
          "type": "service_account",
          ...
        }'
        ```

    e. Run the FastAPI backend:
        ```bash
        uvicorn main:app --reload
        ```

3. Set up the frontend:

    a. Navigate to the frontend directory:
        ```bash
        cd frontend
        ```

    b. Install the required dependencies:
        ```bash
        npm install
        ```

    c. Run the React frontend:
        ```bash
        npm start
        ```

## Deployment

### Firebase

1. Create a Firebase project and set up a Realtime Database.
2. Download the service account key JSON file from the Firebase project settings.
3. Add the service account key JSON to the backend `.env` file as the `SERVICE_ACCOUNT_KEY` environment variable.

### Vercel

1. Create a new project on Vercel and link it to your GitHub repository.
2. Add the `SERVICE_ACCOUNT_KEY` environment variable in the Vercel project settings.
3. Deploy the project.

## Usage

- Open the [live link](https://tasks-vert.vercel.app/) to access the application.
- Add, update, and delete tasks as needed.

## Links

- Live Link: [https://tasks-vert.vercel.app/](https://tasks-vert.vercel.app/)
- Source Code: [https://github.com/iamsjunaid/tasks](https://github.com/iamsjunaid/tasks)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/iamsjunaid/tasks/blob/main/LICENSE) file for details.
