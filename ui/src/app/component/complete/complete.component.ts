import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';
import { Todo } from '../../class/todo.class';

@Component({
  selector: 'complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  todos: Todo[];
  todoColumn: string;
  checkColumn: string;

  constructor(private crud:CRUDService) { }

  ngOnInit() {
    this.todos = this.crud.getCompleteList();
  }

}
