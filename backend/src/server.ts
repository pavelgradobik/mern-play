import mongoose from "mongoose";
import app from "./app";
// import express from "express";
// import ENV from "./util/validateEnv";
// const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port!, () => {
            console.log("Server running on port " + port + "!")
        });
    })
    .catch(console.error);
