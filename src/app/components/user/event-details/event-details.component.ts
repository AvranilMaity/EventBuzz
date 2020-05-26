import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  eventData: IEvent;
  constructor(private route: Router, private commonService: CommonService, private userService: UserService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.loadEvent();
    console.log(this.eventData);
  }
  navigateToRegister(){
    console.log('navigate to event register');
    this.route.navigate(['/eventregister']);
  }
  loadEvent(){
    this.eventData = this.commonService.fetchEventbyId(this.activatedRoute.snapshot.data['eventId']);
  }
}
