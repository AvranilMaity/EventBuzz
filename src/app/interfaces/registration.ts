import { IUser } from './user';
import { IEvent } from './event';

// tslint:disable-next-line: no-empty-interface
export interface IRegistration{
    eventRegId?: number
    event? : IEvent
    user? : IUser
    name : string
    email : string
    ticketType? : string
    status? : string
    transactionId? : string
}
