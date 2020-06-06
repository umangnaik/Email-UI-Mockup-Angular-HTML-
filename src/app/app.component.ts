import { Component,  OnInit  } from '@angular/core';
import * as  data from './data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
  // ******* Read json from json file ******* 
  email_Content_json: any = (data as any).default;
  isDesc: Boolean = false;
  column: String = 'date';
  direction: number;
  constructor() {
  }
  ngOnInit() {
    // ******* load email data on page load event which goes here *******
    this.email_Content_json = data;
  }
  sort(property) {
    // ******* Loginc for sorting data goes here we can changes sorting order from here *******
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
