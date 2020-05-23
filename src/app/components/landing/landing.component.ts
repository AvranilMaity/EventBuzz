import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  navigateToSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }
  navigateToSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
