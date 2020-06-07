import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import bsCustomFileInput from 'bs-custom-file-input';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ImageService } from 'src/app/services/image.service';
import { IUser } from 'src/app/interfaces/user';
import { IUserDetails } from 'src/app/interfaces/user-details';

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
  profilePicture: File[]=[];
  idList: string[] = ['Aadhar', 'PAN'];
  @ViewChild('labelImport')
  labelImport: ElementRef;
  pageMark: string = 'profile';
  oldPassword: string = '123456';
  idSoftCopy: FileList;

  constructor(private route: Router, private commonService: CommonService, private imageService: ImageService) {}

  initForm() {
    this.userProfileForm = new FormGroup({
      phone: new FormControl(this.phone),
      idType: new FormControl(this.idType),
      emailId: new FormControl(this.emailId),
    });
    this.changePasswordForm = new FormGroup({
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      oldPassword: new FormControl(null),
    });
  }
  onChangePassword() {
    console.log(this.changePasswordForm.value);
    let user:IUser = {
      userId:null,
      email: null,
      password:this.changePasswordForm.controls.password.value,
      isEnabled:false,
    }
    console.log(user);
  }
  async onEditProfile() {
    console.log(this.userProfileForm.value);
    if (this.files != null) {
      var url: string = await this.addImage(this.files[0]);
    }
    console.log(url);
    let userDetails:IUserDetails = {
      userId:null,
      email:null,
      name: null,
      phone:this.userProfileForm.controls.phone.value,
      idType:this.userProfileForm.controls.idType.value,
      idUrl: url
    }
    console.log(userDetails);
  }
  onFileChange(files: FileList) {
    this.files = Array.from(files)
  }

  async onSelect(event) {
    console.log(event);
    this.profilePicture.push(...event.addedFiles);
    if (this.profilePicture != null) {
      var url: string = await this.addImage(this.profilePicture[0]);
    }
    console.log(url);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit() {
    bsCustomFileInput.init();
    this.initForm();
  }

  async addImage(file: File): Promise<string> {
    if(file!=undefined){
      let url = await this.imageService.uploadImage(file, null);
      return url;
    }
    return null;
    
  }
}
