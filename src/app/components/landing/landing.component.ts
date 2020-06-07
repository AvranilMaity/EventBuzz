import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  popularEvents: IEvent[];

  constructor(private route: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.fetchPopularEvents();
    console.log(this.popularEvents);
  }

  onSignOut(){
    console.log('Click on sign in button');
    this.route.navigate(['/landing']);
  }

  createEvent(){
    console.log('Click on create event button');
    this.route.navigate(['/eventaddedit']);
  }

  fetchPopularEvents(){
    this.commonService.fetchPopularEvents().subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          
          this.popularEvents = data;
          console.log(this.popularEvents);
        }
        else{
          console.log("no data available")
        }
        
      },
      err=>{console.log(err)},
      ()=>{console.log("fetched popular events")}
    );
  }

}
