import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrps-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isAllow = false;

  constructor() { }

  ngOnInit() {
    // clear session
    console.log('LOGIN');

  }

}
