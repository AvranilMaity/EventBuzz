import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';
import { EventCategory } from 'src/app/utilities/constants';

@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.css'],
})
export class BrowseEventsComponent implements OnInit {
  filteredEvents: IEvent[];
  categories: any[] = ['Seminar', 'Conference', 'Workshop', 'Reunion', 'Party'];

  constructor(
    private commonService: CommonService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchEventsByFilter();
  }

  fetchEventsByFilter() {
    this.commonService.fetchEventsByFilter(EventCategory.Party, new Date(), new Date(2020,12,20)).subscribe(
      data=>{
        console.log(data);
        if(data!=null){
          
          this.filteredEvents = data;
          console.log(this.filteredEvents);
        }
        else{
          console.log("no data available")
        }
        
      },
      err=>{console.log(err)},
      ()=>{console.log("fetched filtered events")}
    );;
  }
}
