import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  eventTitle: string = 'Tor Baaper Biyer Event';
  eventLocation: string =
    'A-407, Yashwin Hinjewadi, Pune, Maharashtra, Pin: 411507';
  username: string = 'Horidash Paal';
  ticketType: string = 'regular';
  constructor() {}

  ngOnInit() {}
}
