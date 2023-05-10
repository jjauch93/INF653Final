require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

connectDB();

// Custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors());

// Built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for json
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public")));

// Routes
app.use("/", require("./routes/root"));
app.use("/states", require("./routes/api/states"));

app.all("*", (req, res) => {
    res.status(404);
    if(req.accepts("html"))
        res.sendFile(path.join(__dirname, "views", "404.html"));
    else if(req.accepts("json"))
        res.json({ error: "404 Not Found" });
    else
        res.type("txt").send("404 Not Found");
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});