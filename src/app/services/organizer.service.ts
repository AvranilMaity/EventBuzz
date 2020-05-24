import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

constructor() { }

addEvent(event: IEvent){

}

editEvent(event: IEvent){

}

fetchAddedEvents(userId: string){

}

fetchRegistrationsForEvent(eventId: string){

}

}
