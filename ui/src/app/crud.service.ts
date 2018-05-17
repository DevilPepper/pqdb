import { Injectable } from '@angular/core';
import { Todo } from './class/todo.class'

@Injectable()
export class CRUDService {

  private theTime = new Date().toLocaleString().split(",");

  private top3: Todo[] = [
    new Todo("OD important stuff", this.theTime[0], this.theTime[1], false),
    new Todo("Pretty important stuff", this.theTime[0], this.theTime[1], false),
    new Todo("A little bit important stuff", this.theTime[0], this.theTime[1], false),
  ]

  private incomplete: Todo[] = [
    new Todo("OD important stuff", this.theTime[0], this.theTime[1], false),
    new Todo("Pretty important stuff", this.theTime[0], this.theTime[1], false),
    new Todo("A little bit important stuff", this.theTime[0], this.theTime[1], false),
  ]

  private complete: Todo[] = [
    new Todo("Simple task", this.theTime[0], this.theTime[1], true),
    new Todo("Task from the past", this.theTime[0], this.theTime[1], true),
    new Todo("I did this already", this.theTime[0], this.theTime[1], true),
  ]

  constructor() { }

  public getCompleteList(): Todo[] {
    return this.complete;
  }

  public getIncompleteList(): Todo[] {
    return this.incomplete;
  }


  public getTop(n: number): Todo[] {
    return this.top3;
  }

  public addTodo(todo: Todo) {
    this.incomplete.push(todo);
  }
}
