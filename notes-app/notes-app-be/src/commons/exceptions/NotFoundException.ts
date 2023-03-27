import {ApiException} from "./ApiException";

export class NotFoundException extends ApiException {
    constructor(message?: string) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.name = "not found exception";
    }
}