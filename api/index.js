const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, function(){
    console.log("http://localhost:3000/")
})