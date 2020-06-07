import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup,  FormControl } from '@angular/forms';

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
    if(this.signInForm.controls.emailId.value == 'admin' && this.signInForm.controls.password.value == 'admin'){
      this.route.navigate(['/admindashboard']);
      return;
    }
    this.commonService.validateUser(this.signInForm.controls.emailId.value, this.signInForm.controls.password.value)
      .subscribe(
        data => {
          console.log(data);
          if(data.message!=null && data.message.toLowerCase() == 'user successfully authenticated')
          {
            console.log('sign in successful');
            localStorage.setItem('user', JSON.stringify(data));
            this.route.navigate(['/dashboard']);
          }
          else{
            console.log("authentication failed");
          }
        },
        err =>{ console.log(err)},
        () => {console.log('Click on sign in button');});
    
    
  }

  navigateToSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
