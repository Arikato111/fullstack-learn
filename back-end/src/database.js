import { MongoClient } from "mongodb";
import crypto from "crypto";
const url = process.env["URL"] ?? "mongodb://localhost:27017";
// const url = "mongodb://localhost:27017";
const cliant = new MongoClient(url);

const Database = {
    async getAllUsers() {
        try {
            const usersCollec = cliant.db("firstdb").collection("users");
            const allUsersRes = await usersCollec.find().toArray();
            return allUsersRes;
        } catch (err) {
            console.error("ERROR getAllUsers", err);
        }
    },
    async getRegister(name, username, password) {
        // find same username in database
        try {
            const usersColloc = cliant.db("firstdb").collection("users");
            const findUser = await usersColloc.findOne({ username });
            if (findUser) {
                return false;
            } else {
                usersColloc.insertOne({ name, username, password });
                return true;
            }
        } catch (err) {
            console.log("ERROR getRegister", err);
        }
    },
    async getLogin(username, password) {
        try {
            const usersCollec = cliant.db("firstdb").collection("users");
            let findUser = await usersCollec.findOne({ username, password });
            if (findUser) {
                let token = crypto
                    .createHash("sha256")
                    .update(JSON.stringify(findUser) + Date())
                    .digest("hex");
                const tokenColloc = cliant.db("firstdb").collection("token")
                await tokenColloc.deleteMany({username: findUser.username})
                tokenColloc.insertOne({
                    token,
                    username: findUser.username,
                });
                return token;
            } else {
                return false;
            }
        } catch (err) {
            console.log("ERROR getLogin", err);
        }
    },
    async checkLogin(token) {
        try {
            const tokenColloc = cliant.db("firstdb").collection("token");
            let findToken = await tokenColloc.findOne({ token });
            if (findToken) {
                const usersColloc = cliant.db("firstdb").collection("users");
                let user = await usersColloc.findOne({
                    username: findToken.username,
                });
                if (user) {
                    return user;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (err) {
            console.log("ERROR checkLogin", err);
        }
    },
};

export default Database;
