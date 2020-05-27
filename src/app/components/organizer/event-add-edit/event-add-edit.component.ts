import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.scss'],
})
export class EventAddEditComponent implements OnInit {
  createEventForm: FormGroup;
  ticketTypesControl: AbstractControl[];
  event: IEvent;
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
  //ticketTypes: string[] = ['Regular', 'VIP'];
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.proceed = 0;
    console.log('Here');
    this.initForm();
    console.log(this.createEventForm);
  }

  onSubmit() {
    console.log(this.createEventForm);
    if(this.files!=null)
      this.addImage(this.files[0]);
  }

  initForm() {
    let eventName;
    let place;
    let eventBeginDate;
    let eventBeginTime;
    let eventEndDate;
    let eventEndTime;
    let eventDescription;
    let organizerName;
    let organizedBy;
    let organizationName;
    let eventType;
    let eventCapacity;
    let ticketTypes = new FormArray([]);

    this.createEventForm = new FormGroup({
      eventName: new FormControl(eventName),
      place: new FormControl(place),
      eventBeginDate: new FormControl(eventBeginDate),
      eventBeginTime: new FormControl(eventBeginTime),
      eventEndDate: new FormControl(eventEndDate),
      eventEndTime: new FormControl(eventEndTime),
      eventDescription: new FormControl(eventDescription),
      organizerName: new FormControl(organizerName),
      organizedBy: new FormControl(organizedBy),
      organizationName: new FormControl(organizationName),
      eventType: new FormControl(eventType),
      eventCapacity: new FormControl(eventCapacity),
      ticketTypes: ticketTypes,
    });
  }

  onAddTicket() {
    (<FormArray>this.createEventForm.get('ticketTypes')).push(
      new FormGroup({
        ticketTypeName: new FormControl(null),
        ticketTypeQuantity: new FormControl(null),
        ticketTypePrice: new FormControl(null),
      })
    );
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
  universalCheck(inputData: any) {
    console.log(inputData);
  }


  addImage(file: File){

    this.imageService.uploadImage(file, null);

  }
}
