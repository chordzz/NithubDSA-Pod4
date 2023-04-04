import express from "express";
import { notFoundHandler, errorHandler } from "./handlers";
import { notesRouter } from "./routes";

export const app = express();

app.use(express.json());
app.use("/api/v1/", notesRouter);

// app.use(notFoundHandler.handle); //TODO: it's throwing an error
app.use(errorHandler.handle);
