import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  confirmRegistration(){
    console.log('navigate to event register');
    this.route.navigate(['/registereventconfirmation']);
  }
}
