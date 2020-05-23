import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.css']
})
export class EventCollectionComponent implements OnInit {

  constructor(private route: Router, private commonService: CommonService,
              private userService: UserService, private organizerService: OrganizerService) {}


  ngOnInit() {
  }

}