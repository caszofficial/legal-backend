import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dataRouter from "./routes/data.routes.js";

const app = express();

const mongodb_uri = process.env.CONNECT_URI;
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/api/data", dataRouter);

const startServer = async () => {
  try {
    await mongoose.connect(mongodb_uri);
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`App corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
