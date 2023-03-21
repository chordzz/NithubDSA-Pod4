"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableException = void 0;
const ApiException_1 = require("./ApiException");
class UnprocessableException extends ApiException_1.ApiException {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "unprocessable Exception";
    }
}
exports.UnprocessableException = UnprocessableException;
