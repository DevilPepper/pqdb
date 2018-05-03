export class Todo {
  description:string;
  due:string;
  done:boolean;

  constructor(description:string, due:string, done:boolean) {
    this.description = description;
    this.due = due;
    this.done = done;
  }
}
