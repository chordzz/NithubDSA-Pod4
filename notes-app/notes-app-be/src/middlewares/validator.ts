import {ObjectSchema} from "joi";
import {BadRequestException} from "../commons/exceptions";


export const validate = (obj: any, schema: ObjectSchema) => {
    const { error, value } = schema.validate(obj);
    if (error) throw new BadRequestException(error.message);
}