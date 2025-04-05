from .database import mongo_db

players_collection = mongo_db["players"]

def get_player(player_id):
    return players_collection.find_one({"player_id": player_id}, {"_id": 0})

def update_player_progress(player_id, progress):
    players_collection.update_one({"player_id": player_id}, {"$set": {"progress": progress}})
