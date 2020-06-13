import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';
import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
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
  disableAdd: boolean = false;
  maxTicketTypes: number = 0;
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
      user: JSON.parse(localStorage.getItem('user')).user,
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
      ticketPrice:
        (<FormArray>this.createEventForm.get('ticketTypes')).at(0).value
          .ticketTypePrice +
        '-' +
        (<FormArray>this.createEventForm.get('ticketTypes')).at(1).value
          .ticketTypePrice,
      ticketQuantity:
        (<FormArray>this.createEventForm.get('ticketTypes')).at(0).value
          .ticketTypeQuantity +
        '-' +
        (<FormArray>this.createEventForm.get('ticketTypes')).at(1).value
          .ticketTypeQuantity,
      eventCategory: this.createEventForm.controls.eventCategory.value,
    };
    console.log(event);
    console.log(this.invitedRegistrations);
    this.organizerService.addEvent(event, this.invitedRegistrations).subscribe(
      (data) => {
        console.log(data);
        if (data != null) {
          console.log('event added successfully');
          console.log(data);
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
      eventName: new FormControl(eventName, Validators.required),
      eventDescription: new FormControl(eventDescription, Validators.required),
      eventCategory: new FormControl(eventCategory, Validators.required),
      eventLocation: new FormControl(eventLocation, Validators.required),
      eventFromDate: new FormControl(eventFromDate, Validators.required),
      eventToDate: new FormControl(eventToDate, Validators.required),
      organizedType: new FormControl(organizedType, Validators.required),
      organizerName: new FormControl(organizerName),
      organizerPhone: new FormControl(organizerPhone),
      organizerEmail: new FormControl(organizerEmail),
      eventType: new FormControl(eventType, Validators.required),
      eventHeadCount: new FormControl(eventHeadCount),
      ticketTypes: ticketTypes,
    });
  }

  onAddTicket() {
    this.maxTicketTypes += 1;
    if (this.maxTicketTypes == 2) {
      this.disableAdd = true;
    } else {
      this.disableAdd = false;
      console.log('add' + this.maxTicketTypes);
    }
    this.hasTickets = true;
    let ticketArray = ['Regular', 'VIP'];
    (<FormArray>this.createEventForm.get('ticketTypes')).push(
      new FormGroup({
        ticketTypeName: new FormControl(ticketArray[this.maxTicketTypes - 1]),
        ticketTypeQuantity: new FormControl(null),
        ticketTypePrice: new FormControl(null),
      })
    );
    this.getControls();
  }

  onDeleteTicket(id: number) {
    this.maxTicketTypes -= 1;
    console.log('sub' + this.maxTicketTypes);

    this.disableAdd = false;

    if (this.ticketTypesControl.length == 1) {
      this.hasTickets = false;
    }
    (<FormArray>this.createEventForm.get('ticketTypes')).removeAt(id);
  }

  onAddUser(newInviteName: string, newInviteEmail: string) {
    this.invitedUsers.push(newInviteEmail);
    let registration: IRegistration = {
      user: JSON.parse(localStorage.getItem('user')).user,
      name: newInviteName,
      email: newInviteEmail,
      ticketType: null,
      status: 'Pending',
    };
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
    if (file != undefined) {
      let url = await this.imageService.uploadImage(file, null);
      return url;
    }
    return null;
  }
}
