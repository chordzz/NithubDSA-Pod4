import {Handler} from "./Handler";
import {NextFunction, Request} from "express";
import {NotFoundException} from "../commons/exceptions";

class NotFoundHandler extends Handler {
    handle(req: Request, res: Response, next: NextFunction): void {
        next(new NotFoundException(`Error: path not found: ${req.path}`));
    }
}

export const notFoundHandler = new NotFoundHandler();