# AIQuestGame
# 🧠 AI Quest Game

An interactive educational game designed to help users learn about historical battles using quizzes and puzzles.  
This project uses **React.js** for the frontend and **Python** scripts for game logic and content generation.

---

## 📌 Project Overview

**AI Quest Game** is a GenAI-powered interactive learning platform focused on Indian historical battles like:
- ⚔️ Battle of Panipat
- ⚔️ Battle of Buxar
- ⚔️ Battle of Madras
- ...and many more!

The game uses multiple-choice questions, hints, and visual progress charts to make learning history engaging and fun.

---

## 🎮 Features

- 🔍 History-based MCQ Quizzes
- 📊 Progress chart (track your answers)
- 💡 Hint button for guided help
- 🧠 AI-generated content with Python
- 💻 Built with modern React components

---

## 🛠 Tech Stack

| Tech         | Usage                       |
|--------------|-----------------------------|
| React.js     | Frontend UI                 |
| Python       | AI content generation logic |
| CSS          | Styling                     |
| Chart.js or Recharts | Visual progress display |

---

## 📁 File Structure

AIQuestgames/ ├── public/ │ └── styles.css, setupTests.js ├── src/ │ ├── App.js, App.css, index.js │ ├── pages/ │ │ └── HistoryPuzzleGame.js │ ├── components/ui/ │ │ ├── Button.jsx, HintButton.jsx │ │ ├── Gamecard.jsx, Questioncard.jsx │ │ └── ProgressChart.jsx │ ├── cUtils/ │ │ └── questions.jsx │ ├── gen.ai/ │ │ └── Battle.py │ └── Apicall.py └── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/comalkaur/AIQuestgames.git
   cd AIQuestgames
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
🤖 AI Integration (Python)
The gen.ai/Battle.py file contains scripts for handling historical data and generating AI-driven questions based on battles.

To run:

bash
Copy
Edit
python src/gen.ai/Battle.py
🙌 Contributing
If you'd like to improve the game or add new features:

Fork this repo

Create a new branch

Submit a pull request!

📃 License
This project is open-source and free to use for learning and development.

contributers

. Komalpreet kaur  
. Mehak bansal
. Himanshu
