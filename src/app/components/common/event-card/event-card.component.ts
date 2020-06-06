import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() eventData: IEvent;
  eventLocation: string = 'Pune, Maharashtra';
  constructor(
    private route: Router,
    private commonService: CommonService,
    private userService: UserService,
    private organizerService: OrganizerService
  ) {}

  ngOnInit() {}

  navigateToEventDetails() {
    console.log('navigate to event details');
    this.route.navigate(['/eventdetails', this.eventData.eventId.toString()]);
  }
}
