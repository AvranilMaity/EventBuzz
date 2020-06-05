import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  changePasswordForm: FormGroup;
  username: string = 'Avranil Maity';
  emailId: string = 'avranilmaity97@gmail.com';
  phone: number = 9903114217;
  idType: string = 'Aadhar';
  password: string = '123456';
  files: File[] = [];
  idList: string[] = ['Aadhar', 'PAN'];
  @ViewChild('labelImport')
  labelImport: ElementRef;
  pageMark: string = 'profile';
  oldPassword: string = '123456';
  idSoftCopy: FileList;

  constructor() {}

  initForm() {
    this.userProfileForm = new FormGroup({
      phone: new FormControl(this.phone),
      idType: new FormControl(this.idType),
      emailId: new FormControl(this.emailId),
    });
    this.changePasswordForm = new FormGroup({
      password: new FormControl(null),
      confirmpassword: new FormControl(null),
      oldPassword: new FormControl(null),
    });
  }
  onChangePassword() {
    console.log(this.changePasswordForm.value);
  }
  onEditProfile() {
    console.log(this.userProfileForm.value);
  }
  onFileChange(files: FileList) {
    console.log(files);
    this.idSoftCopy = files;
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map((f) => f.name)
      .join(', ');
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit() {
    bsCustomFileInput.init();
    this.initForm();
  }
}
