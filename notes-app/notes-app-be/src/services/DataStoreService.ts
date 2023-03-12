import {Notes} from "../entities";


/**
 * @classdesc Data store interface.
 */
export interface DataStore {
    create(note: Notes): Notes;
    getNote(id: string): Notes;
    getNotes(): Notes[];
    update(id: string, note: Notes): boolean;

    delete(id: string): boolean;
}

/**
 * @classdesc Data store implementation
 */
export class DataStoreImpl implements DataStore {
    create(note: Notes): Notes {
        return undefined;
    }

    delete(id: string): boolean {
        return false;
    }

    getNote(id: string): Notes {
        return undefined;
    }

    getNotes(): Notes[] {
        return [];
    }

    update(id: string, note: Notes): boolean {
        return false;
    }

}