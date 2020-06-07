import { Injectable } from '@angular/core';
import { IRegistration } from '../interfaces/registration';
import { IEvent } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }

eventRegister(registrations: IRegistration[]):Observable<IRegistration[]>{
  console.log(registrations)
  return this.http.post<IRegistration[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/registerEvent",registrations);

}

fetchRegisteredEvents(user:IUser): Observable<IEvent[]>{
  // const registeredEvents: IEvent[] = [
  //   { eventId: 0, eventName: 'Glastonbury Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 2, 2), eventImageUrl: 'https://www.nme.com/wp-content/uploads/2019/06/CHEMICAL-BROTHERS-ANDREW-WHITTON-NME-GLASTO19-7705-WEB-696x442.jpg'},
  //   { eventId: 0, eventName: 'Sundance Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 4, 24), eventImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Sundance_Film_Festival.jpg'},
  //   { eventId: 0, eventName: 'Cannes Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 5, 12), eventImageUrl: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/05/opening_ceremony_during_the_72nd_annual_cannes_film_festival_.jpg'},
  //   ];

  return null;
  //return this.http.post<IEvent[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/registerEvent",user);

}

fetchOrganizedEvents(user:IUser):Observable<IEvent[]>{
  // const organizedEvents: IEvent[] = [
  //   { eventId: 0, eventName: 'Glastonbury Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 2, 2), eventImageUrl: 'https://www.nme.com/wp-content/uploads/2019/06/CHEMICAL-BROTHERS-ANDREW-WHITTON-NME-GLASTO19-7705-WEB-696x442.jpg'},
  //   { eventId: 0, eventName: 'Sundance Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 4, 24), eventImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Sundance_Film_Festival.jpg'},
  // ];
  console.log(user);
  return this.http.post<IEvent[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/getOrganizedEvents",user);

}




}


