import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  @Input()
  todoColumn: string;
  @Input()
  checkColumn: string;

  constructor() { }

  ngOnInit() {
  }

}
