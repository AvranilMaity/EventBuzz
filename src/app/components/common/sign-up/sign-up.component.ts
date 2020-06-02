import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  proceed: boolean = false;
  signUpForm: FormGroup;
  idList: string[] = ['Aadhar', 'PAN'];
  @ViewChild('labelImport')
  labelImport: ElementRef;
  constructor(private route: Router, private commonService: CommonService) {}

  ngOnInit() {
    bsCustomFileInput.init();
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl(null),
      phone: new FormControl(null),
      idType: new FormControl(null),
      emailId: new FormControl(null),
      password: new FormControl(null),
      confirmpassword: new FormControl(null),
      idSoftCopy: new FormControl(null),
    });
  }
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(', ');
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
