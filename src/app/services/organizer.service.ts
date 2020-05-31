import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

constructor(private http:HttpClient) { }

addEvent(event: IEvent):Observable<IEvent>{
  
  return this.http.post<IEvent>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/saveEventDetails",event);

}

editEvent(event: IEvent){

}

fetchAddedEvents(userId: string){

}

fetchRegistrationsForEvent(eventId: string){

}

}
