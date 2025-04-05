import requests
from config import FAAS_GATEWAY

def send_notification(user_id, message):
    response = requests.post(f"{FAAS_GATEWAY}/function/send-notification", json={"user_id": user_id, "message": message})
    return response.json()
