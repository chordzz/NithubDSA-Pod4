import {DataStore} from "./DataStoreService";
import {Notes} from "../entities";

export type Index = {
    // word =======> [several notes]
    [key: string]: string[]
}

export type IndexObjImpl = {
    [word: string]: {
        [noteId: string]: boolean
    }
}

export interface IndexService {
    index(note: Notes): Promise<void>;
    reIndex(prev: Notes, current: Notes): Promise<void>
}

class IndexServiceImpl implements  IndexService {
    private readonly invertedIndex: Index
    private readonly invertIndex: IndexObjImpl;
    constructor() {
        this.invertedIndex = {};
    }

    index = async (note: Notes): Promise<void> => {
        const contents: Array<string> = this.splitNoteContents(note.content);

        // HashMap implementation.
        contents.forEach((word: string) => {

            // if word exists in inverted index
            if (this.invertIndex[word]) {
                const previousDocuments: { [noteId: string]: boolean } = this.invertIndex[word];
                previousDocuments[note.id] = true;
                return;
            }

            // if word doesn't exist.
            this.invertIndex[word] = { [note.id]: true }
        });

        // Array implementation.
        contents.forEach((word: string) => {
            const previousDocuments: string[] = this.invertedIndex[word];
            if (previousDocuments) previousDocuments.push(note.id);
            this.invertedIndex[word] = [note.id];
        });

    }

    reIndex = async (previousNote: Notes, currentNote: Notes): Promise<void> => {
        const omittedWords = this.checkOmissions(previousNote.content, currentNote.content);
        const addedWords = this.checkAdditions(previousNote.content, currentNote.content);

        // removing omitted words from the index.
        this.removeNoteThatWordDoesntExistIn(omittedWords, previousNote.id);



    }

    /**
     * @desc Omoooo
     * @param {Array<string>} omittedWords
     * @param {string} noteId
     */
    private removeNoteThatWordDoesntExistIn = (omittedWords: string[], noteId: string) => {

        omittedWords.forEach((word: string) => {
            const notes = this.invertIndex[word]
            delete notes[noteId]
        });

    }
    private checkOmissions = (prevContent: string, currentContent: string): Array<string> => {
        return [];
    }

    private checkAdditions = (prevContent: string, currentContent: string): Array<string> => {
        return []
    }
    private checkForWordsThatAreNotInAnyNote = () => {

    }

    /**
     * @desc split the notes content
     * @param {string} content
     * @returns {Array<string>} words
     */
    private splitNoteContents = (content: string): Array<string> => {
        return content.split(/\s|[,.;:?!()\[\]{}"]+/);
    }
}

export default new IndexServiceImpl()