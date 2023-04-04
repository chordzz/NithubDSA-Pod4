"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const db = __importStar(require("../datastore/notes.store.json"));
const IndexService_1 = __importDefault(require("./IndexService"));
/**
 * @classdesc Data store implementation
 */
class DataStoreImpl {
    constructor(indexService) {
        this.indexService = indexService;
        this.create = async (note) => {
            // @ts-ignore
            db[note.id] = note;
            this.indexService.index(note);
            return note;
        };
        this.search = async (word) => {
            const notesIndex = this.indexService.getNotes(word);
            return Object.keys(notesIndex).map(this.getNote);
        };
        this.update = async (id, currentNote) => {
            // @ts-ignore
            const previousNote = db[id];
            this.indexService.reIndex(previousNote, currentNote);
            return false;
        };
    }
    delete(id) {
        return false;
    }
    getNote(id) {
        // @ts-ignore
        const note = db[id];
        return note;
    }
    getNotes() {
        return [];
    }
}
exports.default = new DataStoreImpl(IndexService_1.default);
