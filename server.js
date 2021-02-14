const express = require("express");

const port=3000;

const server = express();

server.set("view engine", "hbs");

server.get ('/', (request, response) => {
    response.render("main");
})

server.listen(port);