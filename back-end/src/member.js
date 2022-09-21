import express from "express";
import Database from "./database.js";

const Routing = express.Router();

Routing.get("/member", async (req, res) => {
    const member = await Database.getAllUsers();
    res.status(200).json(member);
});

export default Routing;