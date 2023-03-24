import * as rand from "nanoid";
export class Notes {
    public readonly id: string;

    public title: string;

    public content: string;

    public createdAt: Date;

    constructor() {
        this.id = rand.random(10).toString();
    }
}