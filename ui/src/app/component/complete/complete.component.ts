import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';

@Component({
  selector: 'complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private crud:CRUDService) { }

  ngOnInit() {
  }

}
