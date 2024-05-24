const express = require("express");
const app = express();

require("dotenv").config();
require("./db.js");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const wordDefinitionRouter = require("./routes/wordDefinitionRoute.js");
const categoryRouter = require("./routes/categoryRoute.js");
const wordRouter = require("./routes/wordRoute.js")

app.use("/word_definition", wordDefinitionRouter);
app.use("/category", categoryRouter);
app.use("/word", wordRouter);

app.listen(port, () => {
    console.log(`o servidor ${port}`);
})