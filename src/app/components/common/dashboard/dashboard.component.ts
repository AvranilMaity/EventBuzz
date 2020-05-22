import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

  createEvent(){
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }

}
