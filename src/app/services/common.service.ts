import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';
import { HttpClient } from '@angular/common/http';
import { IUserDetails } from '../interfaces/user-details';
import { IAuthUser } from '../interfaces/auth-user';

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

fetchAllEvents(): IEvent[]{
  // const allEvents: IEvent[] = [
  //   { eventId: 0, eventName: 'Glastonbury Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 2, 2), eventImageUrl: 'https://www.nme.com/wp-content/uploads/2019/06/CHEMICAL-BROTHERS-ANDREW-WHITTON-NME-GLASTO19-7705-WEB-696x442.jpg'},
  //   { eventId: 0, eventName: 'Sundance Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 4, 24), eventImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Sundance_Film_Festival.jpg'},
  //   { eventId: 0, eventName: 'Cannes Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 5, 12), eventImageUrl: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/05/opening_ceremony_during_the_72nd_annual_cannes_film_festival_.jpg'},
  //   { eventId: 0, eventName: 'Toronto Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 8, 6), eventImageUrl: 'https://www.egypttoday.com/images/larg/52330.jpg'},
  //   { eventId: 0, eventName: 'Oscars Award Ceremony', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 10, 16), eventImageUrl: 'https://www.dw.com/image/52317471_303.jpg'},
  //   { eventId: 0, eventName: 'Emmy Awards', eventDescription: 'lorem ipsum dolor si amet', eventFromDate: new Date(2020, 12, 25), eventImageUrl: 'https://cdn1.thr.com/sites/default/files/2019/08/emmy_statue_2.jpg'},  
  // ];

  // return allEvents;
  return null;
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

fetchEventDetails(eventId: string){

}

signOut(userId: string){

}

}
