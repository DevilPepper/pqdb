import { Injectable } from '@angular/core';
import { Todo } from './class/todo.class'

@Injectable()
export class CRUDService {

  private top3: Todo[] = [
    new Todo("OD important stuff", new Date().toLocaleString(), false),
    new Todo("Pretty important stuff", new Date().toLocaleString(), false),
    new Todo("A little bit important stuff", new Date().toLocaleString(), false),
  ]

  private incomplete: Todo[] = [
    new Todo("OD important stuff", new Date().toLocaleString(), false),
    new Todo("Pretty important stuff", new Date().toLocaleString(), false),
    new Todo("A little bit important stuff", new Date().toLocaleString(), false),
  ]

  private complete: Todo[] = [
    new Todo("Simple task", new Date().toLocaleString(), true),
    new Todo("Task from the past", new Date().toLocaleString(), true),
    new Todo("I did this already", new Date().toLocaleString(), true),
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
