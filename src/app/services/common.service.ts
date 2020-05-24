import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }

fetchEventbyId(eventId: number){

}

fetchAllEvents(){

}

fetchPopularEvents(): IEvent[]{
  const popularEvents: IEvent[] = [
    { eventId: 0, eventName: 'Glastonbury Festival', eventDescription: 'lorem ipsum dolor si amet', eventDate: new Date(2020, 2, 2), eventImageUrl: 'https://www.nme.com/wp-content/uploads/2019/06/CHEMICAL-BROTHERS-ANDREW-WHITTON-NME-GLASTO19-7705-WEB-696x442.jpg'},
    { eventId: 0, eventName: 'Sundance Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventDate: new Date(2020, 4, 24), eventImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Sundance_Film_Festival.jpg'},
    { eventId: 0, eventName: 'Cannes Film Festival', eventDescription: 'lorem ipsum dolor si amet', eventDate: new Date(2020, 5, 12), eventImageUrl: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/05/opening_ceremony_during_the_72nd_annual_cannes_film_festival_.jpg'},
    ];

  return popularEvents;
}

registerUser(user: IUser){

}

validateUser(email: string, password: string){

}

fetchEventDetails(eventId: string){

}

signOut(userId: string){

}

}
