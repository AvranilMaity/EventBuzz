import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { IEvent } from 'src/app/interfaces/event';
import { FormGroup, FormControl } from '@angular/forms';
import { IRegistration } from 'src/app/interfaces/registration';

interface Attendee {
  name: string;
  emailId: string;
  ticketType: string;
}
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  eventData: IEvent;
  isOwner: boolean = false;
  addFriendForm: FormGroup;
  eventId: string;
  invitedRegistrations: IRegistration[] = [];

  invitedUsers: Attendee[] = [
    {
      name: 'Avranil',
      ticketType: 'VIP',
      emailId: 'fvgbhnj',
    },
  ];
  constructor(
    private route: Router,
    private commonService: CommonService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  initForm() {
    this.addFriendForm = new FormGroup({
      name: new FormControl(),
      emailId: new FormControl(),
      ticketType: new FormControl(),
    });
  }
  ngOnInit() {
    this.initForm();

    this.loadEvent();
    console.log(this.eventData);
  }
  navigateToRegister() {
    console.log('navigate to event register');
    console.log(this.activatedRoute.snapshot.data['eventId']);
    this.route.navigate(['/eventregister', this.eventId]);
  }
  loadEvent() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
    });
  }
  onAddUser() {
    this.invitedUsers.push(this.addFriendForm.value);
    console.log(this.addFriendForm.value);

    let registration: IRegistration = {
      user:JSON.parse(localStorage.getItem('user')).user,
      name: this.addFriendForm.controls.name.value,
      email: this.addFriendForm.controls.emailId.value,
      ticketType: this.addFriendForm.controls.ticketType.value,
      status: 'Pending',
    };
    this.invitedRegistrations.push(registration);
  }
  onAddAsVIP() {
    (<FormControl>this.addFriendForm.get('ticketType')).setValue('VIP');
  }
  onAddAsRegular() {
    (<FormControl>this.addFriendForm.get('ticketType')).setValue('Regular');
  }
}
