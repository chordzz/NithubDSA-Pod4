"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreImpl = void 0;
const entities_1 = require("../entities");
/**
 * @classdesc Data store implementation
 */
class DataStoreImpl {
    create(title) {
        return new entities_1.Notes(title);
    }
    delete(id) {
        return false;
    }
    getNote(id) {
        return new entities_1.Notes("");
    }
    getNotes() {
        return [];
    }
    update(id, note) {
        return false;
    }
}
exports.DataStoreImpl = DataStoreImpl;
