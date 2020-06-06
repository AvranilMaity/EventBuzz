import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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

  downloadTicket(){
    var data = document.getElementById('ticket');  //Id of the table
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      let imgWidth = 208;   
      let pageHeight = 295;    
      let imgHeight = canvas.height * imgWidth / canvas.width;  
      let heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      let position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('ticket.pdf'); // Generated PDF
    });
  }
}
