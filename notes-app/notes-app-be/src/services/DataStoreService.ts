import { Notes } from "../entities";
// @ts-ignore
import * as db from "../datastore/notes.store.json";
import IndexServiceImpl, { IndexService } from "./IndexService";

/**
 * @classdesc Data store interface.
 */
export interface DataStore {
  create(note: Notes): Promise<Notes>;
  getNote(id: string): Notes;
  getNotes(): Notes[];
  update(previousNote: Notes, note: Notes): Promise<Notes>;
  search(word: string): Promise<Notes[]>;
  delete(id: string): boolean;
}

/**
 * @classdesc Data store implementation
 */
class DataStoreImpl implements DataStore {
  constructor(private readonly indexService: IndexService) {}
  create = async (note: Notes): Promise<Notes> => {
    // @ts-ignore
    db[note.id] = note;

    this.indexService.index(note);

    return note;
  };

  search = async (word: string): Promise<Notes[]> => {
    const notesIndex = this.indexService.getNotes(word);
    return Object.keys(notesIndex).map(this.getNote)
  }

  delete(id: string): boolean {
    return false;
  }

  getNote(id: string): Notes {
    // @ts-ignore
    const note = db[id];
    return note;
  }

  getPinnedNote(id: string) {
    
  }

  getNotes(): Notes[] {
    return [];
  }

  update = async (previousNote: Notes, currentNote: Notes): Promise<Notes> => {
    this.indexService.reIndex(previousNote, currentNote);
    previousNote.content = currentNote.content;
    return currentNote;
  };
}

export default new DataStoreImpl(IndexServiceImpl);
