import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// import axios from "axios";
import router from "./src/member.js";
import Database from "./src/database.js";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send("welcome to my api");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        let isToken = await Database.getLogin(username, password);
        if (isToken) {
            res.status(201).json({
                status: 1,
                token: isToken,
            });
        } else {
            res.status(200).json({
                status: 0,
                message: "please check your username or password",
            });
        }
    } else {
        res.status(400).json({
            status: 0,
            message: "please check your information",
        });
    }
});

app.use(router);

const PORT = process.env["PORT"] ?? 4000;
app.listen(PORT, () => {
    console.log("run at port", PORT);
});
