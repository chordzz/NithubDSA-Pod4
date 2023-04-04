import * as Joi from "joi";


export const createNoteSchema: Joi.ObjectSchema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

export const singleNoteSchema: Joi.ObjectSchema = Joi.object().keys({
    id: Joi.string().required()
})

export const updateNoteSchema: Joi.ObjectSchema = Joi.object().keys({
    data: createNoteSchema.keys({
        id: Joi.string().required(),
    })
})

export const searchNoteSchema: Joi.ObjectSchema = Joi.object().keys({
    query: Joi.string().required(),
})