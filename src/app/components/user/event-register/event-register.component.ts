import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService, private userService: UserService) { }

  ngOnInit() {
  }

  confirmRegistration(){
    console.log('navigate to event register');
    this.route.navigate(['/registereventconfirmation']);
  }
}
