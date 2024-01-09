import mongoose from "mongoose";
import express from "express";
import ENV from "./util/validateEnv";
const app = express();
const port = ENV.PORT;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

mongoose.connect(ENV.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port!, () => {
            console.log("Server running on port " + port + "!")
        });
    })
    .catch(console.error);
