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
  update(id: string, note: Notes): Promise<boolean>;

  delete(id: string): boolean;
}

/**
 * @classdesc Data store implementation
 */
class DataStoreImpl implements DataStore {
  constructor(private readonly indexService: IndexService) {}
  create = async (note: Notes): Promise<Notes> => {
    db[note.id] = note;

    this.indexService.index(note);

    return note;
  };

  delete(id: string): boolean {
    return false;
  }

  getNote(id: string): Notes {
    const note = db[id];
    return note;
  }

  getNotes(): Notes[] {
    return [];
  }

  update = async (id: string, currentNote: Notes): Promise<boolean> => {
    const previousNote = db[id];
    this.indexService.reIndex(previousNote, currentNote);
    return false;
  };
}

export default new DataStoreImpl(IndexServiceImpl);
