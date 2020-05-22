import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit() {
  }
  navigateToRegister(){
    console.log('navigate to event register');
    this.route.navigate(['/eventregister']);
  }
}
