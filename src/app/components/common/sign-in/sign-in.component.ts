import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/dashboard']);
  }

}
