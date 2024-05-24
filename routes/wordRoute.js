const express = require("express")
const router = express.Router()

const WordController = require("../controllers/WordController");

router.get("/", WordController.allWords);
router.post("/", WordController.createWord);

module.exports = router;