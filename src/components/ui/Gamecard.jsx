import { useEffect, useState } from "react";
import io from "socket.io-client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Volume2, Map, Users } from "lucide-react";

const socket = io("http://localhost:5000"); // Backend URL

export default function Game() {
  const [question, setQuestion] = useState("Loading question...");
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [character, setCharacter] = useState("Unknown Historian");
  const [audioHint, setAudioHint] = useState(null);
  const [mapURL, setMapURL] = useState("");
  const [timePeriod, setTimePeriod] = useState("Ancient Era");
  
  useEffect(() => {
    socket.on("newQuestion", (data) => {
      setQuestion(data.question);
      setHint("");
      setCharacter(data.character || "Mysterious Figure");
      setMapURL(data.map || "");
      setAudioHint(data.audioHint || null);
      setTimePeriod(data.timePeriod || "Unknown Era");
    });

    socket.on("hint", (data) => {
      setHint(data.hint);
    });

    socket.on("progressUpdate", (data) => {
      setProgress(data.progress);
      setScore(data.score);
    });

    return () => socket.disconnect();
  }, []);

  const submitAnswer = () => {
    socket.emit("submitAnswer", answer);
    setAnswer("");
  };

  const playAudioHint = () => {
    if (audioHint) {
      const audio = new Audio(audioHint);
      audio.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/game-bg.jpg')] bg-cover text-white p-6 relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="p-6 max-w-3xl text-center bg-gray-900 bg-opacity-80 shadow-2xl rounded-2xl border-4 border-yellow-500 relative">
          <CardContent>
            <h1 className="text-4xl font-extrabold mb-4 text-yellow-400 flex items-center justify-center">
              <Sparkles className="mr-2 animate-spin" /> AI Time Travel Quest <Sparkles className="ml-2 animate-spin" />
            </h1>
            <h2 className="text-lg italic text-blue-300">You are in: {timePeriod}</h2>
            <h2 className="text-lg italic text-green-300">Guided by: {character}</h2>
            <p className="text-lg font-semibold italic mt-2 border-l-4 border-yellow-300 pl-4">{question}</p>
            {hint && <p className="text-green-400 mt-2 animate-pulse">Hint: {hint}</p>}
            <div className="flex justify-center mt-4 gap-3">
              {audioHint && (
                <Button onClick={playAudioHint} className="mr-2 bg-purple-500 hover:bg-purple-700 flex items-center px-4 py-2 rounded-lg">
                  <Volume2 className="mr-2" /> Play Audio Hint
                </Button>
              )}
              {mapURL && (
                <a href={mapURL} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 flex items-center px-4 py-2 rounded-lg text-white font-bold">
                  <Map className="mr-2" /> View Map
                </a>
              )}
            </div>
            <input
              className="mt-4 w-full p-3 text-black rounded-lg border-2 border-yellow-400 shadow-md focus:ring-2 focus:ring-yellow-300"
              type="text"
              placeholder="Your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <Button onClick={submitAnswer} className="mt-4 w-full bg-red-600 hover:bg-red-800 font-bold py-2 text-lg">
              Submit Answer
            </Button>
            <div className="mt-6">
              <p className="text-lg font-semibold">Progress</p>
              <Progress className="w-full h-4 bg-gray-700 rounded-full" value={progress} />
              <p className="mt-2 font-semibold text-yellow-300">{progress}% Complete</p>
            </div>
            <p className="mt-4 text-2xl font-bold text-yellow-300">Score: {score} ⚡</p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div className="absolute bottom-6 right-6 bg-gray-800 p-3 rounded-xl shadow-lg text-sm text-gray-200">
        <Users className="inline-block mr-2" /> Online Players: 42
      </motion.div>
    </div>
  );
}
