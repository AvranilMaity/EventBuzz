import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.css']
})
export class BrowseEventsComponent implements OnInit {
  allEvents: IEvent[];

  constructor(private commonService: CommonService, private userService: UserService) { }

  ngOnInit() {
    this.fetchAllEvents();
  }

  fetchAllEvents(){
    this.allEvents = this.commonService.fetchAllEvents();
  }

}
