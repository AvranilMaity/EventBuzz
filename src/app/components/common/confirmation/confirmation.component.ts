import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from 'src/app/services/common.service';
import { IRegistration } from 'src/app/interfaces/registration';
import { IEvent } from 'src/app/interfaces/event';

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
  eventId:string;
  event:IEvent;
  registrationId:string;
  registration:IRegistration;

  constructor(private route:Router, private activatedRoute:ActivatedRoute, private userService:UserService, private commonService:CommonService) {}

  ngOnInit() {
    this.eventLocation = this.eventLocation.toUpperCase();
    this.username = this.username.toUpperCase();
    this.ticketType = this.ticketType.toUpperCase();

    this.loadTicket();

  }

  downloadTicket() {
    var data = document.getElementById('ticket'); //Id of the table
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      console.log(canvas.height);

      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      console.log(imgHeight);

      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('ticket.pdf'); // Generated PDF
    });
    this.route.navigate(['/dashboard']);

  }

  loadTicket(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      this.commonService.fetchEventDetailsById(this.eventId).subscribe(
        (data) => {
          console.log(data);
          if (data != null) {
            this.event = data[0];
            console.log('event data fetched');
          } else {
            console.log('event data fetch failed');
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('fetch event by id called');
        }
      );
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.registrationId = params.get('eventRegId');
      this.commonService.fetchRegistrationById(this.registrationId).subscribe(
        (data) => {
          console.log(data);
          if (data != null) {
            this.registration=data;
            console.log('fetched registration by id')
          } else {
            console.log('fetch registration by id failed');
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('fetch registration by id function called');
        }
      )
    });
  }
}
