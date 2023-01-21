var http = require("http");
const express = require("express");
const app = express();

const port = 3000;
app.listen(port);

const baseDir = `${__dirname}`;
app.use(express.static(`${baseDir}`));
app.get("/", (req, res) => res.sendfile("index.html", {
    root: baseDir
}));