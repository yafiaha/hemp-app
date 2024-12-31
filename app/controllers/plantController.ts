import { Request, Response } from "express";
import Plant, { IPlant } from "../models/Plant";

// Get all plants
export const getAllPlants = async (req: Request, res: Response): Promise<void> => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (err) {
    console.error("Error fetching plants:", err); 
    res.status(500).json({ error: "Error fetching plants" });
  }
};

// Get a specific plant by ID
export const getPlantById = async (req: Request, res: Response): Promise<void> => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) {
      res.status(404).json({ error: "Plant not found" });
      return;
    }
    res.status(200).json(plant);
  } catch (err) {
    console.error("Error fetching plant:", err); 
    res.status(500).json({ error: "Error fetching plant" });
  }
};

// Add a new plant
export const createPlant = async (req: Request, res: Response): Promise<void> => {
  try {
    const plantData: IPlant = req.body;
    const newPlant = new Plant(plantData);
    const savedPlant = await newPlant.save();
    res.status(201).json(savedPlant);
  } catch (err) {
    console.error("Error saving plant:", err); 
    res.status(400).json({ error: "Error saving plant" });
  }
};

// Update a plant
export const updatePlant = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlant) {
      res.status(404).json({ error: "Plant not found" });
      return;
    }
    res.status(200).json(updatedPlant);
  } catch (err) {
    console.error("Error updating plant:", err);
    res.status(400).json({ error: "Error updating plant" });
  }
};

// Delete a plant
export const deletePlant = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
    if (!deletedPlant) {
      res.status(404).json({ error: "Plant not found" });
      return;
    }
    res.status(200).json({ message: "Plant deleted successfully" });
  } catch (err) {
    console.error("Error deleting plant:", err); 
    res.status(500).json({ error: "Error deleting plant" });
  }
};


