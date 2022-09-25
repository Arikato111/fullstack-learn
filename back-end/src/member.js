import express from "express";
import Database from "./database.js";

const Routing = express.Router();

Routing.get("/member", async (req, res) => {
    const { token } = req.headers
    if (token) {
        let user = await Database.checkLogin(token);
        if (user) {
            user.password = "**********";
            res.status(200).json({
                status: 1,
                user
            })
        } else {
            res.status(200).json({
                status: 0,
                message: "not found any user"
            })
        }
    } else {
        res.status(400).json({
            status: 0,
            message: "not found token",
        });
    }
});

Routing.post("/member", async (req, res) => {
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
        res.status(400).json({
            status: 0,
            message: "this username has already used",
        });
    } else {
        let result = await Database.getRegister(name, username, password);
        if (result) {
            res.status(201).json({ status: 1, message: "register success" });
        } else {
            res.status(200).json({
                status: 0,
                message: "the name has already used",
            });
        }
    }
});

export default Routing;
