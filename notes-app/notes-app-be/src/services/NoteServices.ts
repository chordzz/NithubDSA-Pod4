import {RequestContext, ResponseContext} from "../handlers";
import {Notes} from "../entities";
import DataStoreImpl, {DataStore} from "./DataStoreService";
import {NotFoundException} from "../commons/exceptions";

/**
 * @classdesc Handles the business logic for Notes
 */

class NoteServices {

    constructor(private readonly noteRepo: DataStore) {}

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

        // save the note to the db
        await this.noteRepo.create(notes);

        return {
            code: 201,
            message: "Ya!!!",
            data: notes
        }
    }

    public getPinnedNote = async (): Promise<ResponseContext> => {
        const pinnedNotes = await this.noteRepo.getNotes()
        return {};
    }

    public searchNotes = async ({ query }: RequestContext): Promise<ResponseContext> => {
        const {word} = query;

        let notes;
        if(!word){
            notes = await this.noteRepo.getNotes();
        }else{
            notes = await this.noteRepo.search(word);
        }

        return {
            code: 200,
            message: "Ya!!!",
            data: notes
        }
    }

    /**
     * @desc Retrieve all notes from datastore
     * @returns Promise<ResponseContext>
     */
    public getNotes = async (): Promise<ResponseContext> => {
        const notes = await this.noteRepo.getNotes();

        return {
            code: 200,
            message: "All notes retrieved",
            data: notes,
        }
    }

    /**
     * @desc Retrieves the note from the datastore
     * @param {RequestContext} params
     * @returns Promise<ResponseContext>
     */
    public getNote = async ({ params }: RequestContext): Promise<ResponseContext> => {
        const note = await this.noteRepo.getNote(params.id);
        if (!note) throw new NotFoundException(`Note not found`)

        return {
            code: 200,
            message: "Note found",
            data: note
        }
    }

    /**
     * @desc Updates the note content or title
     * @param {RequestContext} params
     * @param {RequestContext} body
     * @returns Promise<ResponseContext>
     */
    public updateNote = async ({ params, body }: RequestContext): Promise<ResponseContext> => {
        const note = await this.noteRepo.getNote(params.id);
        if (!note) throw new NotFoundException("Note not found");

        const updatedNote = new Notes();
        updatedNote.title = note.title;
        updatedNote.content = body.content;
        updatedNote.isPinned = note.isPinned;


        const result = await this.noteRepo.update(note, updatedNote);

        return {
            code: 200,
            message: "Note updated",
            data: result
        }
    }

    /**
     * @desc Deletes the note from the datastore
     * @param {RequestContext} params
     * @returns Promise<ResponseContext>
     */
    public deleteNote = async ({ params }: RequestContext): Promise<ResponseContext> => {
        this.noteRepo.delete(params.id)
        return {
            message: "Awesome"
        }
    }

}

export default new NoteServices(DataStoreImpl)