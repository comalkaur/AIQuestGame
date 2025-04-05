from flask import Flask
from flask_cors import CORS
from routes.player_routes import player_routes
from routes.game_state_routes import game_state_routes
from routes.article_routes import article_routes
from routes.chat_routes import chat_routes

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(player_routes)
app.register_blueprint(game_state_routes)
app.register_blueprint(article_routes)
app.register_blueprint(chat_routes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
