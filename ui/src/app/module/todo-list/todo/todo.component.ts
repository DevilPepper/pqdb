import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../class/todo.class'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo:Todo;

  constructor() { }

  ngOnInit() {
  }

}
