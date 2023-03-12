import {ApiException} from "./ApiException";

export class BadRequestException extends ApiException {
    constructor(message?: string) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "Bad Request";
    }
}