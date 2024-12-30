"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlant = exports.updatePlant = exports.createPlant = exports.getPlantById = exports.getAllPlants = void 0;
const Plant_1 = __importDefault(require("../models/Plant"));
// Fetch all plants
const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant_1.default.find();
        res.status(200).json(plants);
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching plants" });
    }
};
exports.getAllPlants = getAllPlants;
// Fetch a specific plant by ID
const getPlantById = async (req, res) => {
    try {
        const plant = await Plant_1.default.findById(req.params.id);
        if (!plant) {
            res.status(404).json({ error: "Plant not found" });
            return;
        }
        res.status(200).json(plant);
    }
    catch (err) {
        res.status(500).json({ error: "Error fetching plant" });
    }
};
exports.getPlantById = getPlantById;
// Add a new plant
const createPlant = async (req, res) => {
    try {
        const plantData = req.body;
        const newPlant = new Plant_1.default(plantData);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    }
    catch (err) {
        res.status(400).json({ error: "Error saving plant" });
    }
};
exports.createPlant = createPlant;
// Update a plant
const updatePlant = async (req, res) => {
    try {
        const updatedPlant = await Plant_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlant) {
            res.status(404).json({ error: "Plant not found" });
            return;
        }
        res.status(200).json(updatedPlant);
    }
    catch (err) {
        res.status(400).json({ error: "Error updating plant" });
    }
};
exports.updatePlant = updatePlant;
// Delete a plant
const deletePlant = async (req, res) => {
    try {
        const deletedPlant = await Plant_1.default.findByIdAndDelete(req.params.id);
        if (!deletedPlant) {
            res.status(404).json({ error: "Plant not found" });
            return;
        }
        res.status(200).json({ message: "Plant deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ error: "Error deleting plant" });
    }
};
exports.deletePlant = deletePlant;
