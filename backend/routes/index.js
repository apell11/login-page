import express from "express";
import { getUsers, Register, login,logout } from "../controller/Users.js";
import { verifyToken } from "../middlewaer/verifytoken.js";
import { refreshToken } from "../controller/Refreshtoken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
