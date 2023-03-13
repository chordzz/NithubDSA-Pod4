import {Handler} from "./Handler";
import {NextFunction, Request, Response} from "express";
import {ApiException} from "../commons/exceptions/ApiException";


export class ErrorHandler extends Handler {
    async handle(err:ApiException, req: Request, res: Response, next: NextFunction): Promise<void> {
        const message: string = "Internal server Error";

        // work on if the request is to be shown to the user



        res.status(err.getCode).json({
            error: err.name.toString(),
            message: err.getMessage
        });
    }
}

export const errorHandler = new ErrorHandler();
