import pymongo
import psycopg2
from config import MONGO_URI, POSTGRES_URI

# MongoDB connection
mongo_client = pymongo.MongoClient(MONGO_URI)
mongo_db = mongo_client["history_game"]

# PostgreSQL connection
postgres_conn = psycopg2.connect(POSTGRES_URI)
postgres_cursor = postgres_conn.cursor()
