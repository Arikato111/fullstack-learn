import { MongoClient } from "mongodb";
const url = process.env["URL"] ?? "mongodb://localhost:27017";
const cliant = new MongoClient(url);

const Database = {
    async getAllUsers() {
        try {
            const usersCollec = cliant.db("mydb").collection("users");
            const allUsersRes = await usersCollec.find().toArray();
            return allUsersRes;
        } catch (err) {
            console.error("ERROR getAllUsers", err);
        }
    },
};

export default Database;
