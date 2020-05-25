import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.scss'],
})
export class EventAddEditComponent implements OnInit {
  proceed: number;
  files: File[] = [];
  organizers: string[] = ['Self', 'Corporate'];
  invitedUsers: string[] = [
    'avraneel.babai@gmail.com',
    'avranilmaity97@gmail.com',
    'james@abc.com',
    'peter@oiu.in',
    'avranil.maity@icici.com',
    'maityav@campbells.com',
    'avranil@yashwin.com',
    'kingshuk.saha@gmail.com',
    'kingshuk@gmail.com',
    'saha@abc.com',
    'metheking@oiu.in',
    'king.saha@icici.com',
    'sahaki@campbells.com',
    'kingshuk@yashwin.com',
    'kingshuk@gmail.com',
    'saha@abc.com',
    'metheking@oiu.in',
    'king.saha@icici.com',
    'sahaki@campbells.com',
    'kingshuk@yashwin.com',
  ];

  constructor() {}

  ngOnInit() {
    this.proceed = 0;
  }

  onAddUser(newInvite: string) {
    this.invitedUsers.push(newInvite);
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onProceed() {
    if (this.proceed > 4) {
      this.proceed = 0;
    } else {
      this.proceed += 1;
    }
  }
}
