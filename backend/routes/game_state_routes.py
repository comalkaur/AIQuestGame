from flask import Blueprint, jsonify
from models.game_state_model import get_game_state

game_state_routes = Blueprint("game_state_routes", __name__)

@game_state_routes.route('/game_state/<string:timeline_id>', methods=['GET'])
def fetch_game_state(timeline_id):
    state = get_game_state(timeline_id)
    return jsonify(state) if state else jsonify({"message": "Game state not found"}), 404
