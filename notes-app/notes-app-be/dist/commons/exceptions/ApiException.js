"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(message) {
        super(message);
        this.name = "API Exception";
        this.statusCode = 100;
        this.message = message;
        Error.captureStackTrace(this, Error.constructor); //TODO:
    }
    get getMessage() {
        return this.message;
    }
    get getCode() {
        return this.statusCode;
    }
}
exports.ApiException = ApiException;
