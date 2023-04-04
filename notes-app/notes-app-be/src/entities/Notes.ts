import * as rand from "nanoid";


export class Notes {
  public readonly id: string;

  public title: string;

  public content: string;

  public createdAt: Date;

  public isPinned: boolean;

  constructor() {
    this.id = rand.random(10).toString();
    this.title = "";
    this.content = "";
    this.createdAt = new Date();
    this.isPinned = false;
  }
}
