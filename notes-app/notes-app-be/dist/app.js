"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/api/v1/", routes_1.notesRouter);
// app.use(notFoundHandler.handle); //TODO: it's throwing an error
exports.app.use(handlers_1.errorHandler.handle);
