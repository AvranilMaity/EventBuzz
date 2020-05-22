import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  proceed: boolean = false;
  constructor(private route: Router) {}

  ngOnInit() {}

  onProceed() {
    console.log(this.proceed);
    this.proceed = !this.proceed;
    console.log(this.proceed);
  }

  onSignUp(){
    console.log('Click on sign up button');
    this.route.navigate(['/dashboard']);
  }

  navigateToSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }
}
