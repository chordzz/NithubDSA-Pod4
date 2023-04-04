import {Router} from "express";
import {controllerHandler} from "../handlers";
import {noteService} from "../services";
import { 
    createNoteSchema, 
    singleNoteSchema, 
    updateNoteSchema, 
    searchNoteSchema
} from "../commons/validationSchemas";


export const notesRouter = Router();


notesRouter
    .post("/notes", controllerHandler.handle(noteService.createNote, createNoteSchema))
    .get("/notes", controllerHandler.handle(noteService.getNotes))
    .get("/notes/:id", controllerHandler.handle(noteService.getNote, singleNoteSchema))
    .put("/notes/:id", controllerHandler.handle(noteService.updateNote, updateNoteSchema))
    .delete("/notes/:id", controllerHandler.handle(noteService.deleteNote))
    .post("/notes/search", controllerHandler.handle(noteService.searchNotes, searchNoteSchema))
   