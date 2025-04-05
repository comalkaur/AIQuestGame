from flask import Blueprint, jsonify
from models.article_model import get_article

article_routes = Blueprint("article_routes", __name__)

@article_routes.route('/article/<string:article_title>', methods=['GET'])
def fetch_article(article_title):
    article = get_article(article_title)
    return jsonify(article) if article else jsonify({"message": "Article not found"}), 404
