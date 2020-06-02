import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IdProof } from 'src/app/utilities/constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  proceed: boolean = false;
  signUpForm: FormGroup;
  idList: string[];
  constructor(private route: Router, private commonService: CommonService) {
    this.idList = Object.values(IdProof);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let emailId;
    let password;
    let phone;
    let idType;
    let confirmpassword;

    this.signUpForm = new FormGroup({
      name: new FormControl(name),
      phone: new FormControl(phone),
      idType: new FormControl(idType),
      emailId: new FormControl(emailId),
      password: new FormControl(password),
      confirmpassword: new FormControl(confirmpassword),
    });
  }

  onProceed() {
    console.log(this.proceed);
    this.proceed = !this.proceed;
    console.log(this.proceed);
  }

  onSignUp() {
    console.log(this.signUpForm);
    console.log('Click on sign up button');
    this.route.navigate(['/dashboard']);
  }

  navigateToSignIn() {
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }
}
