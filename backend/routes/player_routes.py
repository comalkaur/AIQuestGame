from flask import Blueprint, jsonify, request
from models.player_model import get_player, update_player_progress

player_routes = Blueprint("player_routes", __name__)

@player_routes.route('/player/<int:player_id>', methods=['GET'])
def fetch_player(player_id):
    player = get_player(player_id)
    return jsonify(player) if player else jsonify({"message": "Player not found"}), 404

@player_routes.route('/player/<int:player_id>', methods=['PUT'])
def modify_player_progress(player_id):
    data = request.get_json()
    if "progress" in data:
        update_player_progress(player_id, data["progress"])
        return jsonify({"message": "Player progress updated"})
    return jsonify({"message": "Invalid request"}), 400
