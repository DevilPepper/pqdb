import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';

@Component({
  selector: 'incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.css']
})
export class IncompleteComponent implements OnInit {

  constructor(private crud:CRUDService) { }

  ngOnInit() {
  }

}
