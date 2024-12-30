import express from "express";
import {
  getAllPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
} from "../controllers/plantController";

const router = express.Router();

// Fetch all plants
router.get("/", getAllPlants);

// Fetch a plant by ID
router.get("/:id", getPlantById);

// Add a new plant
router.post("/", createPlant);

// Update an existing plant
router.put("/:id", updatePlant);

// Delete a plant
router.delete("/:id", deletePlant);

export default router;
