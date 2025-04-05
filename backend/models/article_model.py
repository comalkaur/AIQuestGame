from .database import mongo_db

articles_collection = mongo_db["articles"]

def get_article(article_title):
    return articles_collection.find_one({"title": article_title}, {"_id": 0})
