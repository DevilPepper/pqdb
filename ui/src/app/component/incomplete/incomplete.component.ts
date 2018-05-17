import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';
import { Todo } from '../../class/todo.class';

@Component({
  selector: 'incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css']
})
export class IncompleteComponent implements OnInit {

    todos: Todo[];
    todoColumn: string = "Incomplete";
    checkColumn: string = "Done";

  constructor(private crud:CRUDService) { }

  ngOnInit() {
    this.todos = this.crud.getIncompleteList();
  }

}
