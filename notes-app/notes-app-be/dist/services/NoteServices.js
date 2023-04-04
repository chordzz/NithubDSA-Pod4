"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("../entities");
const DataStoreService_1 = __importDefault(require("./DataStoreService"));
const exceptions_1 = require("../commons/exceptions");
/**
 * @classdesc Handles the business logic for Notes
 */
class NoteServices {
    constructor(noteRepo) {
        this.noteRepo = noteRepo;
        /**
         * @desc Create a new note in the datastore
         * @param {RequestContext} body
         * @returns Promise<ResponseContext>
         */
        this.createNote = async ({ body }) => {
            // perform operation
            const notes = new entities_1.Notes();
            notes.content = body.content;
            notes.createdAt = new Date(Date.now());
            notes.title = body.title;
            // save the note to the db
            await this.noteRepo.create(notes);
            // re-index the note indexer.
            return {
                code: 201,
                message: "Ya!!!",
                data: notes
            };
        };
        this.searchNotes = async ({ body }) => {
            return {};
        };
        /**
         * @desc Retrieve all notes from datastore
         * @returns Promise<ResponseContext>
         */
        this.getNotes = async () => {
            return {
                code: 200,
                data: [],
            };
        };
        /**
         * @desc Retrieves the note from the datastore
         * @param {RequestContext} params
         * @returns Promise<ResponseContext>
         */
        this.getNote = async ({ params }) => {
            return {};
        };
        /**
         * @desc Updates the note content or title
         * @param {RequestContext} params
         * @param {RequestContext} body
         * @returns Promise<ResponseContext>
         */
        this.updateNote = async ({ params, body }) => {
            const note = await this.noteRepo.getNote(params.id);
            if (!note)
                throw new exceptions_1.NotFoundException("Note not found");
            // note.content =
            return {
                code: 200,
                data: {}
            };
        };
        /**
         * @desc Deletes the note from the datastore
         * @param {RequestContext} params
         * @returns Promise<ResponseContext>
         */
        this.deleteNote = async ({ params }) => {
            this.noteRepo.delete(params.id);
            return {
                message: "Awesome"
            };
        };
    }
}
exports.default = new NoteServices(DataStoreService_1.default);
