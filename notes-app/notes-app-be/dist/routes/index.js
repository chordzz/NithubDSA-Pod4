"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = require("express");
const handlers_1 = require("../handlers");
const NoteServices_1 = require("../services/NoteServices");
const validationSchemas_1 = require("../commons/validationSchemas");
exports.notesRouter = (0, express_1.Router)();
const notesServices = new NoteServices_1.NoteServices();
exports.notesRouter
    .post("/notes", handlers_1.controllerHandler.handle(notesServices.createNote, validationSchemas_1.createNoteSchema))
    .get("/notes", handlers_1.controllerHandler.handle(notesServices.getNotes))
    .get("/notes/:id", handlers_1.controllerHandler.handle(notesServices.getNote, validationSchemas_1.singleNoteSchema))
    .put("/notes/:id", handlers_1.controllerHandler.handle(notesServices.updateNote, validationSchemas_1.updateNoteSchema))
    .delete("/notes/:id", handlers_1.controllerHandler.handle(notesServices.deleteNote));
