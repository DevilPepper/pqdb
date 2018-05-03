import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../class/todo.class'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Input()
  todoColumn: string;
  @Input()
  checkColumn: string;

  constructor() { }

  ngOnInit() {
  }

}
