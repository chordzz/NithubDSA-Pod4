
import * as uuid from "uuid";

export class Notes {
    public readonly id: string;

    public title: string;

    public content: string;

    public createdAt: Date;

    constructor() {
        this.id = uuid.v4().toString();
    }

}