import {Handler} from "./Handler";
import { ObjectSchema} from "joi";
import {NextFunction, Request, Response} from "express";
import {validate} from "../middlewares";
import {UnprocessableException} from "../commons/exceptions/UnprocessibleException";


export type ResponseContext = {
    code?: number
    data?: Record<any, any>

    message?: string
}

export type AnyFunction = (ctx: RequestContext) => any;

export interface RequestContext {
    body: any;
    params: any;
    query: any;
}


export const parseReqArguments = (req: Request): RequestContext => {
    return {
        body: req.body,
        params: req.params,
        query: req.query,
    }
}

export type ExpressCallbackFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;


class ControllerHandler extends Handler {

    handle(func: AnyFunction, schema?: ObjectSchema | undefined): ExpressCallbackFunction  {
        return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            const reqContext = parseReqArguments(req);
            const {body, params, query} = reqContext;

            try{

                try{
                    if (schema){
                        if (body) validate(body, schema)
                        if (params) validate(params, schema)
                        if (query) validate(query, schema);
                    }

                }catch (e: any){
                    throw new UnprocessableException(e.message);
                }


                const { code, ...other}: ResponseContext = await func(reqContext);

                // any other operation goes here.

                res.status(code ?? 200).json(other);


            }catch (e: any){
                next(e);
            }
        }
    }

}

export const controllerHandler = new ControllerHandler();
