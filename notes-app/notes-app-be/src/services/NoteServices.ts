import {RequestContext, ResponseContext} from "../handlers";
import {Notes} from "../entities";

/**
 * @classdesc Handles the business logic for Notes
 */

export class NoteServices {

    constructor() {}

    /**
     * @desc Create a new note in the datastore
     * @param {RequestContext} body
     * @returns Promise<ResponseContext>
     */
    public createNote = async ({ body }: RequestContext): Promise<ResponseContext> => {
        // perform operation
        const notes = new Notes();
        notes.content = body.content;
        notes.createdAt = new Date(Date.now());
        notes.title = body.title;

        // db operations.


        return {
            code: 201,
            message: "Ya!!!",
            data: notes
        }
    }

    /**
     * @desc Retrieve all notes from datastore
     * @returns Promise<ResponseContext>
     */
    public getNotes = async (): Promise<ResponseContext> => {


        return {
            code: 200,
            data: [],
        }
    }

    /**
     * @desc Retrieves the note from the datastore
     * @param {RequestContext} params
     * @returns Promise<ResponseContext>
     */
    public getNote = async ({ params }: RequestContext): Promise<ResponseContext> => {


        return
    }

    /**
     * @desc Updates the note content or title
     * @param {RequestContext} params
     * @param {RequestContext} body
     * @returns Promise<ResponseContext>
     */
    public updateNote = async ({ params, body }: RequestContext): Promise<ResponseContext> => {
        // perform stuffs


        return {
            code: 200,
            data: {}
        }
    }

    /**
     * @desc Deletes the note from the datastore
     * @param {RequestContext} params
     * @returns Promise<ResponseContext>
     */
    public deleteNote = async ({ params }: RequestContext): Promise<ResponseContext> => {


        return {
            message: "Awesome"
        }
    }

}