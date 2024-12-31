import mongoose from "mongoose";
import Plant from "./models/Plant"; 

const testPlants = [
  {
    name: "Blue Dream",
    thc: 18,
    cbd: 1,
    effects: ["Relaxing", "Energizing"],
    flavors: ["Berry", "Sweet"],
    genetics: "Hybrid",
  },
  {
    name: "Pineapple Express",
    thc: 20,
    cbd: 0.5,
    effects: ["Happy", "Uplifted"],
    flavors: ["Pineapple", "Citrus"],
    genetics: "Sativa",
  },
];

mongoose
  .connect("mongodb://localhost:27017/hempDB")  
  .then(() => {
    console.log("Connected to MongoDB");
    return Plant.insertMany(testPlants); // Insert test data
  })
  .then(() => {
    console.log("Test data inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting test data:", err);
    mongoose.connection.close();
  });
