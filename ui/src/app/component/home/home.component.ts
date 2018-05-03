import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../crud.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private crud:CRUDService) { }

  ngOnInit() {
  }

}
