import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }

fetchEventbyId(eventId: number){

}

fetchAllEvents(){

}

registerUser(user: User){

}

validateUser(email: string, password: string){

}

fetchEventDetails(eventId: string){

}

signOut(userId: string){

}

}
