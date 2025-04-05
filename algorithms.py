from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

questions = [
    "What is Newton's First Law?",
    "Define inertia in physics.",
    "What is the SI unit of force?",
    "Explain the concept of momentum."
]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)
similarity_matrix = cosine_similarity(X)

print(similarity_matrix)

