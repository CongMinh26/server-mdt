import express from "express";
import connect from "./api/v1/database/connect"
const app = express();


app.listen(1337, async () => {
    console.log("App is running");
    await connect()
})