import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { IUserDetails } from '../interfaces/user-details';
import { IAuthUser } from '../interfaces/auth-user';
import { EventCategory } from '../utilities/constants';
import { IRegistration } from '../interfaces/registration';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor(private http:HttpClient) { }

fetchEventbyId(eventId: number):IEvent{
  // const popularEvents: IEvent[] = [
  //   { eventId: 0, eventName: 'Glastonbury Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 2, 2), eventImageUrl: 'https://www.nme.com/wp-content/uploads/2019/06/CHEMICAL-BROTHERS-ANDREW-WHITTON-NME-GLASTO19-7705-WEB-696x442.jpg'},
  //   { eventId: 0, eventName: 'Sundance Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 4, 24), eventImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Sundance_Film_Festival.jpg'},
  //   { eventId: 0, eventName: 'Cannes Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 5, 12), eventImageUrl: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/05/opening_ceremony_during_the_72nd_annual_cannes_film_festival_.jpg'},
  //   ];
  //   console.log(eventId);
  //   return popularEvents[0]
  return null;
}

fetchEventsByFilter(eventCategory:EventCategory, eventFromDate:Date, eventToDate:Date): Observable<IEvent[]>{
  let event:IEvent = {
    eventCategory: eventCategory,
    eventFromDate:eventFromDate,
    eventToDate:eventToDate,
  }
  console.log(event);
  return this.http.post<IEvent[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/getEventsByFilter", event)
}

fetchPopularEvents(): Observable<IEvent[]>{
  return this.http.get<IEvent[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/getAllEvents")
}

registerUser(user: IUser, userDetails:IUserDetails): Observable<IAuthUser>{
  let authUser:IAuthUser={
    user: user,
    userDetails: userDetails
  }
  return this.http.post<IAuthUser>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/register",authUser);

}

validateUser(email: string, password: string): Observable<IAuthUser>{
  let user: IUser = {
    email:email,
    password:password
  }
  let authUser:IAuthUser = {
    user: user
  }
  
  return this.http.post<IAuthUser>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/signin",authUser);
}

fetchEventDetailsById(eventId: string):Observable<IEvent[]>{
  return this.http.get<IEvent[]>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/getEventById?eventId="+eventId);

}

fetchRegistrationById(registrationId:string):Observable<IRegistration>{
  return this.http.get<IRegistration>("https://stackeventweb-nldsh.run-ap-south1.goorm.io/findByRegistrationId?registrationId="+registrationId);
}

signOut(userId: string){

}

}
