"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const exceptions_1 = require("../commons/exceptions");
const validate = (obj, schema) => {
    const { error, value } = schema.validate(obj);
    if (error)
        throw new exceptions_1.BadRequestException(error.message);
};
exports.validate = validate;
