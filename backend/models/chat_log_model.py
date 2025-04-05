from .database import mongo_db
import datetime

chat_logs_collection = mongo_db["chat_logs"]

def log_chat(player_id, message):
    chat_logs_collection.insert_one({
        "player_id": player_id,
        "message": message,
        "timestamp": datetime.datetime.utcnow()
    })
