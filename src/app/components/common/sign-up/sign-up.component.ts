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
  signUpClicked = false;
  @ViewChild('labelImport')
  labelImport: ElementRef;
  constructor(
    private route: Router,
    private commonService: CommonService,
    private imageService: ImageService
  ) {}
  url: string;
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
    this.files = Array.from(files);
  }

  onProceed() {
    console.log(this.proceed);
    this.proceed = !this.proceed;
    console.log(this.proceed);
  }

  async onSignUp() {
    if (!this.signUpClicked) {
      this.signUpClicked = true;
      console.log(this.signUpForm);
      if (this.files != null) {
        this.url = await this.addImage(this.files[0]);
      }
      console.log(this.url);

      let user: IUser = {
        userId: null,
        email: this.signUpForm.controls.emailId.value,
        password: this.signUpForm.controls.password.value,
        isEnabled: false,
      };
      let userDetails: IUserDetails = {
        userId: null,
        email: this.signUpForm.controls.emailId.value,
        name: this.signUpForm.controls.name.value,
        phone: this.signUpForm.controls.phone.value,
        idType: this.signUpForm.controls.idType.value,
        idUrl: this.url,
      };
      console.log(user);
      console.log(userDetails);
      console.log('sign up cliked');
      this.commonService.registerUser(user, userDetails).subscribe(
        (data) => {
          console.log(data);
          if (
            data.message != null &&
            data.message.toLowerCase() == 'yayy! new user created!'
          ) {
            console.log('sign up successful');
            localStorage.setItem('user', JSON.stringify(data));
            this.route.navigate(['/dashboard']);
          } else {
            console.log(data.message.toLowerCase());
          }
        },
        (err) => {
          console.log(err);
        },
        () => {}
      );

      //console.log('Click on sign up button');
      this.route.navigate(['/dashboard']);
    }
  }

  navigateToSignIn() {
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }

  async addImage(file: File): Promise<string> {
    if (file != undefined) {
      let url = await this.imageService.uploadImage(file, null);
      return url;
    }
    return null;
  }
}
