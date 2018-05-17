export class Todo {
  description:string;
  due:string;
  done:boolean;

  constructor(description:string, dueDate:string, dueTime:string done:boolean) {
    this.description = description;
    this.dueDate = dueDate;
    this.dueTime = dueTime
    this.done = done;
  }
}
