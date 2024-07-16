import firebase_admin
from firebase_admin import credentials, db
import os
# Use a service account
cred = credentials.Certificate(os.path.join(os.path.dirname(__file__), '../serviceAccountKey.json'))
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://tasks-e31cb-default-rtdb.firebaseio.com/'
})

ref = db.reference('tasks')
