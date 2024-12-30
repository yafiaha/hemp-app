import mongoose, { Schema, Document } from "mongoose";

export interface IPlant extends Document {
  name: string;
  thc: number;
  cbd: number;
  effects: string[];
  flavors: string[];
  genetics: string; // e.g., "Hybrid", "Sativa"
}

const PlantSchema: Schema = new Schema({
  name: { type: String, required: true },
  thc: { type: Number, required: true },
  cbd: { type: Number, required: true },
  effects: { type: [String], required: true },
  flavors: { type: [String], required: true },
  genetics: { type: String, required: true },
});

export default mongoose.model<IPlant>("Plant", PlantSchema);
