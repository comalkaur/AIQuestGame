//import React from "react";
//import HistoryPuzzleGame from "./pages/HistoryPuzzleGame";



//const App = () => {
  //return (
    //<div>
    //  <HistoryPuzzleGame />
   // </div>
  //);
//};

// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/items");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
