"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ErrorHandler = void 0;
const Handler_1 = require("./Handler");
class ErrorHandler extends Handler_1.Handler {
    async handle(err, req, res, next) {
        const message = "Internal server Error";
        // work on if the request is to be shown to the user
        res.status(err.getCode).json({
            error: err.name.toString(),
            message: err.getMessage
        });
    }
}
exports.ErrorHandler = ErrorHandler;
exports.errorHandler = new ErrorHandler();
