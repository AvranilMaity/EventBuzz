import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { IEvent } from 'src/app/interfaces/event';
import { IAuthUser } from 'src/app/interfaces/auth-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registeredEvents: IEvent[];
  organizedEvents: IEvent[];
  user:IAuthUser;
 
  constructor(private route: Router, private commonService: CommonService,
              private userService: UserService, private organizerService: OrganizerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.fetchRegisteredEvents();
    this.fetchOrganizedEvents();
    console.log(this.organizedEvents);

  }

  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

  createEvent(){
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }

  fetchRegisteredEvents(){
    this.commonService.fetchPopularEvents().subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          
          this.registeredEvents = data;
          console.log(this.registeredEvents);
        }
        else{
          console.log("no data available")
        }
        
      },
      err=>{console.log(err)},
      ()=>{console.log("fetched popular events")}
    );
  }

  fetchOrganizedEvents(){
    this.userService.fetchOrganizedEvents(this.user.user).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          
          this.organizedEvents = data;
          console.log("fetched organized events");
        }
        else{
          console.log("no data available")
        }
        
      },
      err=>{console.log(err)},
      ()=>{console.log("fetched organized events function called")}
    );
  }

}
