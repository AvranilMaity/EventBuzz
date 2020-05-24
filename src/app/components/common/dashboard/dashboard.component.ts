import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registeredEvents: IEvent[];
  organizedEvents: IEvent[];
 
  constructor(private route: Router, private commonService: CommonService,
              private userService: UserService, private organizerService: OrganizerService) { }

  ngOnInit() {
    this.fetchRegisteredEvents();
    this.fetchOrganizedEvents();
    console.log(this.organizedEvents);

  }

  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

  createEvent(){
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }

  fetchRegisteredEvents(){
    this.registeredEvents = this.userService.fetchRegisteredEvents('1');
    //console.log(this.registeredEvents);
  }

  fetchOrganizedEvents(){
    this.organizedEvents = this.userService.fetchOrganizedEvents('1');
  }

}
