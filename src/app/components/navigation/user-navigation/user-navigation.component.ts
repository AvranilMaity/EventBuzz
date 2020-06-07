import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { IAuthUser } from 'src/app/interfaces/auth-user';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css'],
})
export class UserNavigationComponent implements OnInit {
  constructor(private route: Router, private commonService: CommonService) {}
  accountEnabled: boolean = false;
  ngOnInit() {
    var user: IAuthUser = JSON.parse(localStorage.getItem('user'));
    if (user != null && user.user.isEnabled == false) {
      this.accountEnabled = false;
    } else {
      this.accountEnabled = true;
    }
  }
  onSignOut() {
    console.log('Click on sign in button');
    localStorage.removeItem('user');
    this.route.navigate(['/landing']);
  }

  createEvent() {
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }
}
