"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerHandler = exports.parseReqArguments = void 0;
const Handler_1 = require("./Handler");
const middlewares_1 = require("../middlewares");
const UnprocessibleException_1 = require("../commons/exceptions/UnprocessibleException");
const parseReqArguments = (req) => {
    return {
        body: req.body,
        params: req.params,
        query: req.query,
    };
};
exports.parseReqArguments = parseReqArguments;
class ControllerHandler extends Handler_1.Handler {
    handle(func, schema) {
        return async (req, res, next) => {
            const reqContext = (0, exports.parseReqArguments)(req);
            const { body, params, query } = reqContext;
            try {
                try {
                    if (schema) {
                        if (body)
                            (0, middlewares_1.validate)(body, schema);
                        if (params)
                            (0, middlewares_1.validate)(params, schema);
                        if (query)
                            (0, middlewares_1.validate)(query, schema);
                    }
                }
                catch (e) {
                    throw new UnprocessibleException_1.UnprocessableException(e.message);
                }
                const { code, ...other } = await func(reqContext);
                // any other operation goes here.
                res.status(code ?? 200).json(other);
            }
            catch (e) {
                next(e);
            }
        };
    }
}
exports.controllerHandler = new ControllerHandler();
