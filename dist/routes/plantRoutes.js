"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plantController_1 = require("../controllers/plantController");
const router = express_1.default.Router();
// Fetch all plants
router.get("/", plantController_1.getAllPlants);
// Fetch a plant by ID
router.get("/:id", plantController_1.getPlantById);
// Add a new plant
router.post("/", plantController_1.createPlant);
// Update an existing plant
router.put("/:id", plantController_1.updatePlant);
// Delete a plant
router.delete("/:id", plantController_1.deletePlant);
exports.default = router;
