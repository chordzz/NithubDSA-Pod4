"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const Handler_1 = require("./Handler");
const exceptions_1 = require("../commons/exceptions");
class NotFoundHandler extends Handler_1.Handler {
    handle(req, res, next) {
        next(new exceptions_1.NotFoundException(`Error: path not found: ${req.path}`));
    }
}
exports.notFoundHandler = new NotFoundHandler();
