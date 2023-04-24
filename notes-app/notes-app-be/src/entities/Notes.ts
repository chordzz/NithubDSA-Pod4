import rand from "crypto";


export class Notes {
  public readonly id: string;

  public title: string;

  public content: string;

  public createdAt: Date;

  public isPinned: boolean;

  constructor() {
    this.id = rand.randomBytes(10).toString("hex");
    this.title = "";
    this.content = "";
    this.createdAt = new Date();
    this.isPinned = false;
  }
}
