"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
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
                const _a = yield func(reqContext), { code } = _a, other = __rest(_a, ["code"]);
                // any other operation goes here.
                res.status(code !== null && code !== void 0 ? code : 200).json(other);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.controllerHandler = new ControllerHandler();
