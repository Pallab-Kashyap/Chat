import express from "express";
import connectDB from "./config/db.js";
import cors from "cors"

const app = express();

connectDB()

app.use(cors())

app.listen(3000, () => console.log('server started'))