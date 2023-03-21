import {Notes} from "../entities";


/**
 * @classdesc Data store interface.
 */
export interface DataStore {
    create(title: string): Notes;
    getNote(id: string): Notes;
    getNotes(): Notes[];
    update(id: string, note: Notes): boolean;

    delete(id: string): boolean;
}

/**
 * @classdesc Data store implementation
 */
export class DataStoreImpl implements DataStore {
    create(title: string): Notes {
        return new Notes(title);
    }

    delete(id: string): boolean {
        return false;
    }

    getNote(id: string): Notes {
        return new Notes("");
    }
    
    getNotes(): Notes[] {
        return [];
    }

    update(id: string, note: Notes): boolean {
        return false;
    }

}