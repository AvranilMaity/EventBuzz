import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  navigateToEventDetails(){
    console.log('navigate to event details');
    this.route.navigate(['/eventdetails']);
  }
}
