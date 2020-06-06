import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl } from '@angular/forms';
import bsCustomFileInput from 'bs-custom-file-input';
import { IUser } from 'src/app/interfaces/user';
import { IUserDetails } from 'src/app/interfaces/user-details';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  proceed: boolean = false;
  signUpForm: FormGroup;
  idList: string[] = ['Aadhar', 'PAN'];
  files: File[] = [];
  @ViewChild('labelImport')
  labelImport: ElementRef;
  constructor(private route: Router, private commonService: CommonService, private imageService: ImageService) {}

  ngOnInit() {
    bsCustomFileInput.init();
    this.initForm();
  }

  initForm() {
    let name;
    let phone;
    let idType;
    let emailId;
    let password;
    let confirmPassword;
    let idSoftCopy;

    this.signUpForm = new FormGroup({
      name: new FormControl(name),
      phone: new FormControl(phone),
      idType: new FormControl(idType),
      emailId: new FormControl(emailId),
      password: new FormControl(password),
      confirmPassword: new FormControl(confirmPassword),
      idSoftCopy: new FormControl(idSoftCopy),
    });
  }
  onFileChange(files: FileList) {
    this.files = Array.from(files)
  }

  onProceed() {
    console.log(this.proceed);
    this.proceed = !this.proceed;
    console.log(this.proceed);
  }

  async onSignUp() {
    console.log(this.signUpForm);
    if (this.files != null) {
      var url: string = await this.addImage(this.files[0]);
    }
    console.log(url);

    let user:IUser = {
      userId:null,
      email: this.signUpForm.controls.emailId.value,
      password:this.signUpForm.controls.password.value,
      isEnabled:false,
    }
    let userDetails:IUserDetails = {
      userId:null,
      name: this.signUpForm.controls.name.value,
      phone:this.signUpForm.controls.phone.value,
      idType:this.signUpForm.controls.idType.value,
      idUrl: url
    }
    console.log(user);
    console.log(userDetails);
    console.log('Click on sign up button');
    this.route.navigate(['/dashboard']);
  }

  navigateToSignIn() {
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }

  async addImage(file: File): Promise<string> {
    if(file!=undefined){
      let url = await this.imageService.uploadImage(file, null);
      return url;
    }
    return null;
    
  }
}
