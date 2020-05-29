import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private route: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let emailId;
    let password;

    this.signInForm = new FormGroup({
      emailId: new FormControl(emailId),
      password: new FormControl(password),
    });
  }


  onSignIn(){
    console.log(this.signInForm);
    console.log('Click on sign in button');
    this.route.navigate(['/dashboard']);
  }

  navigateToSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
