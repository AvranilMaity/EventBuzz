import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';

interface Attendee {
  name: string;
  email: string;
  type: string;
}

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css'],
})
export class EventRegisterComponent implements OnInit {
  invitedUsers: any[] = [
    'Avranil Maity',
    'Srijita Chakraborty',
    'Kingshuk Saha',
    'Yash Patel',
    'Vishwesh Soman',
    'Pratiksha Panchbhai',
    'Madhura Shaligram',
    'Shaina Carl',
  ];
  promoApplied: boolean = false;

  constructor(
    private route: Router,
    private commonService: CommonService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  applyPromoCode() {
    this.promoApplied = true;
  }
  confirmRegistration() {
    console.log('navigate to event register');
    this.route.navigate(['/registereventconfirmation']);
  }
}
