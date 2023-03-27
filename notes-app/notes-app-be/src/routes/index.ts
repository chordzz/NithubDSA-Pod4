import {Router} from "express";
import {controllerHandler} from "../handlers";
import {NoteServices} from "../services/NoteServices";
import {createNoteSchema, singleNoteSchema, updateNoteSchema} from "../commons/validationSchemas";


export const notesRouter = Router();

const notesServices = new NoteServices();


notesRouter
    .post("/notes", controllerHandler.handle(notesServices.createNote, createNoteSchema))
    .get("/notes", controllerHandler.handle(notesServices.getNotes))
    .get("/notes/:id", controllerHandler.handle(notesServices.getNote, singleNoteSchema))
    .put("/notes/:id", controllerHandler.handle(notesServices.updateNote, updateNoteSchema))
    .delete("/notes/:id", controllerHandler.handle(notesServices.deleteNote))