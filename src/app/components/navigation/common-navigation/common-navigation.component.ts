import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.css']
})
export class CommonNavigationComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  navigateToSignIn(){
    console.log('Click on sign in button');
    this.route.navigate(['/signin']);
  }
  navigateToSignUp(){
    console.log('Click on sign in button');
    this.route.navigate(['/signup']);
  }

}
