import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

}
