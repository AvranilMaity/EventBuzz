import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  constructor(private route: Router, private commonService: CommonService, private userService: UserService) {}
  ngOnInit() {
  }
  navigateToRegister(){
    console.log('navigate to event register');
    this.route.navigate(['/eventregister']);
  }
}
