import {ApiException} from "./ApiException";

export class UnprocessableException extends ApiException {
    constructor(message?: string) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "unprocessable Exception";
    }
}