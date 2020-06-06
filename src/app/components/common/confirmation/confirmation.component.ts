import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  eventTitle: string = 'Tor Baaper Biyer';
  eventLocation: string =
    'A-407, Yashwin Hinjewadi, Pune, Maharashtra, Pin: 411507';
  username: string = 'Horidash Paal';
  eventDate: Date = new Date();
  ticketType: string = 'Regular';
  constructor() {}

  ngOnInit() {
    this.eventLocation = this.eventLocation.toUpperCase();
    this.username = this.username.toUpperCase();
    this.ticketType = this.ticketType.toUpperCase();
  }
}
