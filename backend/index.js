import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import CORS
import db from "./config/databes.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log("Database Connected...");
    await Users.sync();
} catch (error) {
    console.error("Database Connection Error:", error);
}

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Ensure correct origin
app.use(cookieParser());
app.use(express.json());

// Routes
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
