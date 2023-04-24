import express from "express";
import { notesRouter } from "./routes";



const app = express();


app.use(express.json());
app.use("/api/", notesRouter)

export default app;