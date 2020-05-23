import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-confirmation',
  templateUrl: './add-event-confirmation.component.html',
  styleUrls: ['./add-event-confirmation.component.css']
})
export class AddEventConfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}