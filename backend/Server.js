const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
];

// API route
app.get("/api/items", (req, res) => {
    res.json(items);
});
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
   
});