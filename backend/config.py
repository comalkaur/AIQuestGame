import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
POSTGRES_URI = os.getenv("POSTGRES_URI", "postgresql://user:password@localhost/history_game")
FAAS_GATEWAY = os.getenv("FAAS_GATEWAY", "http://gateway.openfaas:8080")
