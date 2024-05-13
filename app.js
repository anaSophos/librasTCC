const express = require("express");
const app = express();

require("dotenv").config();
require("./db.js")

const port = process.env.PORT || 3000;

const wordDefinitionRouter = require("./routes/routes.js")

app.use("/word_definition", wordDefinitionRouter);

app.listen(port, () => {
    console.log(`o servidor ${port}`);
})