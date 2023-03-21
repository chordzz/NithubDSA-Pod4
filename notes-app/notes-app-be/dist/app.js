"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const handlers_1 = require("./handlers");
const routes_1 = require("./routes");
const express = require('express');
exports.app = express();
exports.app.use(express.json());
exports.app.use("/api/v1/", routes_1.notesRouter);
// app.use(notFoundHandler.handle); //TODO: it's throwing an error
exports.app.use(handlers_1.errorHandler.handle);
