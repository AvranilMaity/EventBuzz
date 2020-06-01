import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService) { }
  accountEnabled:boolean = false;
  ngOnInit() {
  }
  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

  createEvent(){
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }
}
