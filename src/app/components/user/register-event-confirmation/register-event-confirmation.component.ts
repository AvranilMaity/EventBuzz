import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-event-confirmation',
  templateUrl: './register-event-confirmation.component.html',
  styleUrls: ['./register-event-confirmation.component.css']
})
export class RegisterEventConfirmationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  backToDashboard(){
    console.log('navigate to dashboard');
    this.route.navigate(['/dashboard']);
  }

}
