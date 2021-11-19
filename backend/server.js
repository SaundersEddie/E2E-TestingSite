const express = require('express');
const path = require('path');
const server = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

if (process.env.NODE_ENV === "production") {
    server.use("/static", express.static(path.join(__dirname, "../frontend/build/static")));
    server.get("/", (req, res) => { res.sendFile(path.join(__dirname, "../frontend/build/")); });
}

// Base Error handler
server.use(function (err, req, res, next) {
    console.log("====== ERROR =======");
    console.error(err.stack);
    res.status(500);
});

server.listen(PORT, () => console.log(`API Server Listening On Port ${PORT} `));
