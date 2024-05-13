const express = require("express")
const router = express.Router()

const WordDefinitionController = require("../controllers/WordDefinitionController")

router.post("/", WordDefinitionController.create);

module.exports = router;