"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const ApiException_1 = require("./ApiException");
class BadRequestException extends ApiException_1.ApiException {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "Bad Request";
    }
}
exports.BadRequestException = BadRequestException;
