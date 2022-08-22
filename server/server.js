const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const books = require("./routes/api/books");

const app = express();

connectDB();

// CORS
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/books", books);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
