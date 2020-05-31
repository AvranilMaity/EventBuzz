import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-add-edit',
  templateUrl: './event-add-edit.component.html',
  styleUrls: ['./event-add-edit.component.scss'],
})
export class EventAddEditComponent implements OnInit {
  createEventForm: FormGroup;
  ticketTypesControl: AbstractControl[];
  hasTickets: boolean = false;
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
    'kingshuk@yashwin.co',
  ];
  eventList: string[] = ['Open', 'Closed'];
  headCountList: string[] = ['Limited', 'Unlimited'];
  //ticketTypes: string[] = ['Regular', 'VIP'];
  constructor(
    private route: Router,
    private imageService: ImageService,
    private organizerService: OrganizerService
  ) {}

  ngOnInit() {
    this.initForm();
    this.ticketTypesControl = this.getControls();
  }

  async onSubmit() {
    console.log(this.createEventForm);
    if (this.files != null) {
      var url: string = await this.addImage(this.files[0]);
    }
    console.log(url);
    let event: IEvent = {
      eventName: this.createEventForm.controls.eventName.value,
      eventImageUrl: url,
      eventDescription: this.createEventForm.controls.eventDescription.value,
      eventDate: this.createEventForm.controls.eventBeginDate.value,
    };
    console.log(event);
    this.organizerService.addEvent(event).subscribe(
      (data) => {
        console.log(data);
        if (data != null) {
          console.log('event added successfully');
          this.route.navigate(['/dashboard']);
        } else {
          console.log('event could not be added');
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('add event service called');
      }
    );
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
    this.hasTickets = true;
    (<FormArray>this.createEventForm.get('ticketTypes')).push(
      new FormGroup({
        ticketTypeName: new FormControl(null),
        ticketTypeQuantity: new FormControl(null),
        ticketTypePrice: new FormControl(null),
      })
    );
    this.getControls();
    console.log(this.ticketTypesControl);
  }

  onDeleteTicket(id: number) {
    if (this.ticketTypesControl.length == 1) {
      this.hasTickets = false;
    }
    (<FormArray>this.createEventForm.get('ticketTypes')).removeAt(id);
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
  getControls() {
    // a getter!
    return (<FormArray>this.createEventForm.get('ticketTypes')).controls;
  }
  onDeleteUser(id: number) {
    console.log(id);
    this.invitedUsers.splice(id, 1);
    console.log(this.invitedUsers);
  }
  universalCheck(inputData: any) {
    console.log(inputData);
  }

  async addImage(file: File): Promise<string> {
    let url = await this.imageService.uploadImage(file, null);
    return url;
  }
}
