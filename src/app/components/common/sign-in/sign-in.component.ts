import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  onSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/dashboard']);
  }

  navigateToSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
