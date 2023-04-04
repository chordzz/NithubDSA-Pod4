"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexServiceImpl {
    constructor() {
        this.index = async (note) => {
            const contents = this.splitNoteContents(note.content);
            // HashMap implementation.
            contents.forEach((word) => {
                // if word exists in inverted index
                if (this.invertIndex[word]) {
                    const previousDocuments = this.invertIndex[word];
                    previousDocuments[note.id] = true;
                    return;
                }
                // if word doesn't exist.
                this.invertIndex[word] = { [note.id]: true };
            });
            // Array implementation.
            contents.forEach((word) => {
                const previousDocuments = this.invertedIndex[word];
                if (previousDocuments)
                    previousDocuments.push(note.id);
                this.invertedIndex[word] = [note.id];
            });
        };
        this.reIndex = async (previousNote, currentNote) => {
            const omittedWords = this.checkOmissions(previousNote.content, currentNote.content);
            const addedWords = this.checkAdditions(previousNote.content, currentNote.content);
            // removing omitted words from the index.
            this.removeNoteThatWordDoesntExistIn(omittedWords, previousNote.id);
            this.addWordsThatWereJustAdded(addedWords, previousNote.id);
            this.checkForWordsThatAreNotInAnyNote();
        };
        this.getNotes = async (word) => {
            return this.invertIndex[word];
        };
        /**
         * @desc Omoooo
         * @param {Array<string>} omittedWords
         * @param {string} noteId
         */
        this.removeNoteThatWordDoesntExistIn = (omittedWords, noteId) => {
            omittedWords.forEach((word) => {
                const notes = this.invertIndex[word];
                delete notes[noteId];
            });
        };
        this.addWordsThatWereJustAdded = (addedWords, noteId) => {
            addedWords.forEach((word) => {
                if (this.invertIndex[word]) {
                    const previousDocuments = this.invertIndex[word];
                    previousDocuments[noteId] = true;
                }
                else {
                    this.invertIndex[word] = { [noteId]: true };
                }
            });
        };
        // Refactor
        this.checkOmissions = (prevContent, currentContent) => {
            const omittedWords = [];
            const currentContentArray = this.splitNoteContents(currentContent);
            const previousContentArray = this.splitNoteContents(prevContent);
            for (let word in previousContentArray) {
                if (!currentContentArray.includes(word)) {
                    omittedWords.push(word);
                }
            }
            return omittedWords;
        };
        // Will Need Refactor because of Time Complexity
        this.checkAdditions = (prevContent, currentContent) => {
            const addedWords = [];
            const currentContentArray = this.splitNoteContents(currentContent);
            const previousContentArray = this.splitNoteContents(prevContent);
            for (let word in currentContentArray) {
                if (!previousContentArray.includes(word)) {
                    addedWords.push(word);
                }
            }
            return addedWords;
        };
        this.checkForWordsThatAreNotInAnyNote = () => {
            for (let word in this.invertIndex) {
                if (Object.keys(this.invertIndex[word]).length === 0) {
                    delete this.invertIndex[word];
                }
            }
        };
        /**
         * @desc split the notes content
         * @param {string} content
         * @returns {Array<string>} words
         */
        this.splitNoteContents = (content) => {
            return content.split(/\s|[,.;:?!()\[\]{}"]+/);
        };
        this.invertedIndex = {};
        this.invertIndex = {};
    }
}
exports.default = new IndexServiceImpl();
