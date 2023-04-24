import {Schema} from "joi";
import {BadRequestException} from "../commons/exceptions";


export const validate = (obj: any, schema: Schema) => {
    const { error, value } = schema.validate(obj);
    if (error) throw new BadRequestException(error.message);
}