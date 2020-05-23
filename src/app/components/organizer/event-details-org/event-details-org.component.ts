import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { OrganizerService } from 'src/app/services/organizer.service';

@Component({
  selector: 'app-event-details-org',
  templateUrl: './event-details-org.component.html',
  styleUrls: ['./event-details-org.component.css']
})
export class EventDetailsOrgComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService, private organizerService: OrganizerService) { }

  ngOnInit() {
  }

}
