"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const ApiException_1 = require("./ApiException");
class NotFoundException extends ApiException_1.ApiException {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "not found exception";
    }
}
exports.NotFoundException = NotFoundException;
