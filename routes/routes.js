import express from "express";
const router = express.Router();

import WordDefinitionController from "../controllers/WordDefinitionController.js";
import WordController from '../controllers/WordController.js';
import UploadImageController from "../controllers/UploadImageController.js";
import CategoryController from "../controllers/CategoryController.js";

router.post("/", WordDefinitionController.create);
router.post("/word", WordController.create);
router.get("/word", WordController.getAll)
router.get("/word/:name", WordController.findOne)
router.put("/word/:id", WordController.updateOne)

router.get("/category", CategoryController.getAll)
router.post("/category", CategoryController.create);

router.get('/', (req, res) => {
    res.json({ msg: "ta rodando pai" });
    console.log("hi");
});

export default router;
