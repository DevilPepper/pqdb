import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';
import { Todo } from '../../class/todo.class';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  description:string;
  dueDate:string;
  dueTime:string;

  constructor(private crud:CRUDService) { }

  ngOnInit() {
  }

  addTodo() {
    this.crud.addTodo(new Todo(this.description, this.dueDate, this.dueTime, false));
  }

}
