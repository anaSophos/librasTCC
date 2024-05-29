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
router.get("/word_id/:id", WordController.findOneId)
router.put("/word/:id", WordController.updateOne)
router.get("/category", CategoryController.getAll)
router.post("/category", CategoryController.create);
router.put("/category/:id", CategoryController.updateOne);
router.get("/category/:id", CategoryController.findOne);
router.delete("/category/:id", CategoryController.deleteOne);

router.get('/', (req, res) => {
    res.json({ msg: "ta rodando pai" });
    console.log("hi");
});

export default router;
