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
import {
  EventType,
  EventCategory,
  HeadCount,
  OrganizedType,
} from 'src/app/utilities/constants';
import { IRegistration } from 'src/app/interfaces/registration';

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
  organizedTypeList: string[];
  eventCategoryList: string[];
  invitedUsers: string[] = [];
  eventTypeList: string[];
  headCountList: string[];
  invitedRegistrations: IRegistration[] = [];
  constructor(
    private route: Router,
    private imageService: ImageService,
    private organizerService: OrganizerService
  ) {
    this.eventCategoryList = Object.values(EventCategory);
    this.organizedTypeList = Object.values(OrganizedType);
    this.eventTypeList = Object.values(EventType);
    this.headCountList = Object.values(HeadCount);
  }

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

      eventId: null,
      eventCreatedDate: new Date(),
      userId: null,
      eventName: this.createEventForm.controls.eventName.value,
      eventDescription: this.createEventForm.controls.eventDescription.value,
      eventImageUrl: url,
      eventLocation: this.createEventForm.controls.eventLocation.value,
      eventFromDate: this.createEventForm.controls.eventFromDate.value,
      eventToDate: this.createEventForm.controls.eventToDate.value,
      organizedType: this.createEventForm.controls.organizedType.value,
      organizerName: this.createEventForm.controls.organizerName.value,
      organizerPhone: this.createEventForm.controls.organizerPhone.value,
      organizerEmail: this.createEventForm.controls.organizerEmail.value,
      eventType: this.createEventForm.controls.eventType.value,
      eventHeadCount: this.createEventForm.controls.eventHeadCount.value,
      ticketPrice: (<FormArray>this.createEventForm.get('ticketTypes')).at(0).value.ticketTypePrice+"##"+
      (<FormArray>this.createEventForm.get('ticketTypes')).at(1).value.ticketTypePrice,
      ticketQuantity: (<FormArray>this.createEventForm.get('ticketTypes')).at(0).value.ticketTypeQuantity+"##"+
      (<FormArray>this.createEventForm.get('ticketTypes')).at(1).value.ticketTypeQuantity,
      eventCategory: this.createEventForm.controls.eventCategory.value,

    };
    console.log(event);
    console.log(this.invitedRegistrations);
    // this.organizerService.addEvent(event).subscribe(
    //   (data) => {
    //     console.log(data);
    //     if (data != null) {
    //       console.log('event added successfully');
    //       this.route.navigate(['/dashboard']);
    //     } else {
    //       console.log('event could not be added');
    //     }
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('add event service called');
    //   }
    // );


  }

  initForm() {
    let eventName;
    let eventDescription;
    let eventCategory;
    let eventLocation;
    let eventFromDate;
    let eventToDate;
    let organizedType;
    let organizerName;
    let organizerPhone;
    let organizerEmail;
    let eventType;
    let eventHeadCount;
    let ticketTypes = new FormArray([]);

    this.createEventForm = new FormGroup({
      eventName: new FormControl(eventName),
      eventDescription: new FormControl(eventDescription),
      eventCategory: new FormControl(eventCategory),
      eventLocation: new FormControl(eventLocation),
      eventFromDate: new FormControl(eventFromDate),
      eventToDate: new FormControl(eventToDate),
      organizedType: new FormControl(organizedType),
      organizerName: new FormControl(organizerName),
      organizerPhone: new FormControl(organizerPhone),
      organizerEmail: new FormControl(organizerEmail),
      eventType: new FormControl(eventType),
      eventHeadCount: new FormControl(eventHeadCount),
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

  onAddUser(newInviteName: string, newInviteEmail:string) {
    this.invitedUsers.push(newInviteEmail);
    let registration: IRegistration = {
      registrationId: null,
      eventId: null,
      userId: null,
      name: newInviteName,
      emailId: newInviteEmail,
      ticketType: null,
      status: null,
      transactionId: null,
    }
    this.invitedRegistrations.push(registration);
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
    this.invitedRegistrations.splice(id, 1);
    console.log(this.invitedUsers);
  }
  universalCheck(inputData: any) {
    console.log(inputData);
  }

  async addImage(file: File): Promise<string> {
    if(file!=undefined){
      let url = await this.imageService.uploadImage(file, null);
      return url;
    }
    return null;
    
  }
}
