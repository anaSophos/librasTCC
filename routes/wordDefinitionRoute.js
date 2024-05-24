const express = require("express")
const router = express.Router()

const upload = require("../config/multer");

const WordDefinitionController = require("../controllers/WordDefinitionController")

router.post("/", upload.single("file"), WordDefinitionController.create);
router.get("/", WordDefinitionController.allWordDefinitions);
router.get("/:wordId", WordDefinitionController.allWordDefinitionByWordId);
router.get("/search", WordDefinitionController.searchByWordName);
router.delete("/:id", WordDefinitionController.remove);

module.exports = router;