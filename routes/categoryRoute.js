const express = require("express")
const router = express.Router()

const CategoryController = require("../controllers/CategoryController")

router.post("/", CategoryController.createCategoy);
router.get("/", CategoryController.allCategories);

module.exports = router;