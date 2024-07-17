import os
import json
from firebase_admin import credentials, initialize_app, db
from dotenv import load_dotenv

load_dotenv()

service_account_key = os.getenv("SERVICE_ACCOUNT_KEY")

if service_account_key:
    try:
        service_account_info = json.loads(service_account_key)
        cred = credentials.Certificate(service_account_info)
        initialize_app(cred, {
            'databaseURL': 'https://tasks-e31cb-default-rtdb.firebaseio.com/'
        })
    except Exception as e:
        raise ValueError("Failed to initialize Firebase SDK: " + str(e))
else:
    raise ValueError("SERVICE_ACCOUNT_KEY environment variable not set")

# Reference to the tasks in the Firebase Realtime Database
ref = db.reference('tasks')
