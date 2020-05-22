import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }
  onSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
