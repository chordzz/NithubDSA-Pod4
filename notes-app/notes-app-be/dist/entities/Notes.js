"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const nanoid_1 = require("nanoid");
class Notes {
    constructor(title) {
        this.id = (0, nanoid_1.nanoid)(10);
        this.createdAt = new Date();
        this.title = title;
    }
}
exports.Notes = Notes;
