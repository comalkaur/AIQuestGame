from flask import Blueprint, jsonify, request
from models.chat_log_model import log_chat

chat_routes = Blueprint("chat_routes", __name__)

@chat_routes.route('/chat', methods=['POST'])
def save_chat():
    data = request.get_json()
    if "player_id" in data and "message" in data:
        log_chat(data["player_id"], data["message"])
        return jsonify({"message": "Chat message logged"})
    return jsonify({"message": "Invalid request"}), 400
