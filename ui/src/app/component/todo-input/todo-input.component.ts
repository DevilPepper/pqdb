import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private crud:CRUDService) { }

  ngOnInit() {
  }

}
