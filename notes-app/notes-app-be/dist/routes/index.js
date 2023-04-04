"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = require("express");
const handlers_1 = require("../handlers");
const services_1 = require("../services");
const validationSchemas_1 = require("../commons/validationSchemas");
exports.notesRouter = (0, express_1.Router)();
exports.notesRouter
    .post("/notes", handlers_1.controllerHandler.handle(services_1.noteService.createNote, validationSchemas_1.createNoteSchema))
    .get("/notes", handlers_1.controllerHandler.handle(services_1.noteService.getNotes))
    .get("/notes/:id", handlers_1.controllerHandler.handle(services_1.noteService.getNote, validationSchemas_1.singleNoteSchema))
    .put("/notes/:id", handlers_1.controllerHandler.handle(services_1.noteService.updateNote, validationSchemas_1.updateNoteSchema))
    .delete("/notes/:id", handlers_1.controllerHandler.handle(services_1.noteService.deleteNote))
    .post("/notes/search", handlers_1.controllerHandler.handle(services_1.noteService.searchNotes, validationSchemas_1.createNoteSchema));
