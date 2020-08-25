const express = require("express");
const server = express();
server.use(express.static("/home/dci/home-work"));
const port = 2222;
server.listen(port, function () {
    console.log(`server is ok running: ${port}`);
});