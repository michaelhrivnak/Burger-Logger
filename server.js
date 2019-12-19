//imports
const express = require('express');
const handlebars = require('express-handlebars');

//set up server/express
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up handlebars
app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars");

//set up routes
require("./controllers/burgersController")(app);

//start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});