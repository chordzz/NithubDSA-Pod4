import { nanoid } from 'nanoid'

export class Notes {
    public readonly id: string;

    public title: string;

    public content: string | undefined;

    public createdAt: Date;

    constructor(title: string) {
        this.id = nanoid(10);
        this.createdAt = new Date();
        this.title = title
    }

}