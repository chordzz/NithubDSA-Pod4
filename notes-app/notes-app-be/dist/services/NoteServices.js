"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteServices = void 0;
const entities_1 = require("../entities");
/**
 * @classdesc Handles the business logic for Notes
 */
class NoteServices {
    constructor() {
        /**
         * @desc Create a new note in the datastore
         * @param {RequestContext} body
         * @returns Promise<ResponseContext>
         */
        this.createNote = ({ body }) => __awaiter(this, void 0, void 0, function* () {
            // perform operation
            const notes = new entities_1.Notes("");
            notes.content = body.content;
            notes.createdAt = new Date(Date.now());
            notes.title = body.title;
            // db operations.
            return {
                code: 201,
                message: "Ya!!!",
                data: notes
            };
        });
        /**
         * @desc Retrieve all notes from datastore
         * @returns Promise<ResponseContext>
         */
        this.getNotes = () => __awaiter(this, void 0, void 0, function* () {
            return {
                code: 200,
                data: [],
            };
        });
        /**
         * @desc Retrieves the note from the datastore
         * @param {RequestContext} params
         * @returns Promise<ResponseContext>
         */
        this.getNote = ({ params }) => __awaiter(this, void 0, void 0, function* () {
            return {
                code: 200,
                data: [],
            };
        });
        /**
         * @desc Updates the note content or title
         * @param {RequestContext} params
         * @param {RequestContext} body
         * @returns Promise<ResponseContext>
         */
        this.updateNote = ({ params, body }) => __awaiter(this, void 0, void 0, function* () {
            // perform stuffs
            return {
                code: 200,
                data: {}
            };
        });
        /**
         * @desc Deletes the note from the datastore
         * @param {RequestContext} params
         * @returns Promise<ResponseContext>
         */
        this.deleteNote = ({ params }) => __awaiter(this, void 0, void 0, function* () {
            return {
                message: "Awesome"
            };
        });
    }
}
exports.NoteServices = NoteServices;
