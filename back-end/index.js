import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import axios from "axios";
import router from "./src/member.js";

const app = express();

app.use(cors());
app.get("/", (req, res) => {
    res.status(200).send("welcome to my api");
});

app.use(router);

const PORT = process.env["PORT"] ?? 4000;
app.listen(PORT, () => {
    console.log("run at port", PORT);
});
