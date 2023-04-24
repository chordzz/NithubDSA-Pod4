import {override} from "joi";


export class ApiException extends Error {

    // @ts-ignore
    name: string;
    protected statusCode: number;
    protected details: any | Record<any, any> | string;
    constructor(message?: string) {
        super(message);
        this.name = "API Exception";
        this.statusCode = 100;
        this.message = message!;

        Error.captureStackTrace(this, Error.constructor); //TODO:
    }

    get getMessage(){
        return this.message;
    }

    get getCode(){
        return this.statusCode;
    }


}