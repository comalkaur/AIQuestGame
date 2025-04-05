# Initialize database models
from .database import mongo_db, postgres_conn, postgres_cursor
from .player_model import players_collection
from .game_state_model import game_state_collection
from .article_model import articles_collection
from .chat_log_model import chat_logs_collection
