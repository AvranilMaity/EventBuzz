import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegistration } from '../interfaces/registration';
import { ICreateEvent } from '../interfaces/create-event';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

constructor(private http:HttpClient) { }

addEvent(event: IEvent, registrations:IRegistration[]):Observable<IEvent>{

  let createEvent:ICreateEvent = {
    event:event,
    registration:registrations
  }
  console.log(createEvent);
  
  
  return this.http.post<IEvent>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/saveEventDetails",createEvent);

}

editEvent(event: IEvent){

}

fetchAddedEvents(userId: string){

}

fetchRegistrationsForEvent(eventId: string){

}

}
