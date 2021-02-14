const express = require("express");
const port = 3000;
const app = express();

app.use(express.static(__dirname +"/public"));

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
})

app.listen(port);