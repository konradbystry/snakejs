const express = require("express");
const port=3000;
const app = express();

app.use(express.static(__dirname+"/public"));

app.set("view engine", "hbs");
app.get ('/', (request, response) => {
    response.render("index.hbs");
})

app.listen(port);