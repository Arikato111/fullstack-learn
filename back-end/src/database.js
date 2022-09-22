import { MongoClient } from "mongodb";
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
};

export default Database;
