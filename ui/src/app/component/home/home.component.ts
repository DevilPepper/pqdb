import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';
import { Todo } from '../../class/todo.class';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    todos: Todo[];
    todoColumn: string;
    checkColumn: string;

  constructor(private crud:CRUDService) { }

  ngOnInit() {
    this.todos = this.crud.getTop(3);
  }

}
