"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNoteSchema = exports.singleNoteSchema = exports.createNoteSchema = void 0;
var Joi = require("joi");
exports.createNoteSchema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
});
exports.singleNoteSchema = Joi.object().keys({
    id: Joi.string().required()
});
exports.updateNoteSchema = Joi.object().keys({
    data: exports.createNoteSchema.keys({
        id: Joi.string().required(),
    })
});
