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
  username: string = 'Avranil Maity';
  emailId: string = 'avranilmaity97@gmail.com';
  phone: number = 9903114217;
  idType: string = 'Aadhar';
  password: string = '123456';
  files: File[] = [];
  idList: string[] = ['Aadhar', 'PAN'];
  @ViewChild('labelImport')
  labelImport: ElementRef;

  constructor() {}

  initForm() {
    this.userProfileForm = new FormGroup({
      name: new FormControl(this.username),
      phone: new FormControl(this.phone),
      idType: new FormControl(this.idType),
      emailId: new FormControl(this.emailId),
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
