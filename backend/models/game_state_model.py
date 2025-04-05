from .database import mongo_db

game_state_collection = mongo_db["game_state"]

def get_game_state(timeline_id):
    return game_state_collection.find_one({"timeline_id": timeline_id}, {"_id": 0})
