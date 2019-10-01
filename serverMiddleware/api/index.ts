import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
    console.log("api:ok");
    res.status(200).json({
        status: "ok",
        error: false,
        data: {
            foo: "bar"
        }
    });
});

app.get("/get-config", (req: Request, res: Response) => {
    const config: Record<string, any> = require("../../config.json");
    res.status(200).json({
        status: "ok",
        error: false,
        data: {
            clientID: config.TWITCH_CLIENT_ID
        }
    });
});

export default app;
