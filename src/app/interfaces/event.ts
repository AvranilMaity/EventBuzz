import { IUser } from './user';
import { EventType, EventCategory, OrganizedType, HeadCount } from '../utilities/constants';

// tslint:disable-next-line: no-empty-interface
export interface IEvent{
    eventId?: number
    eventCreatedDate?: Date
    user? : IUser
    eventName? : string
    eventDescription? : string
    eventImageUrl? : string
    eventLocation? : string
    eventCategory? : EventCategory
    eventFromDate? : Date
    eventToDate? : Date
    organizedType? : OrganizedType
    organizerName? : string
    organizerPhone? : string
    organizerEmail? : string
    eventType? : EventType
    eventHeadCount? : HeadCount
    ticketQuantity? : string
    ticketPrice? : string
    
}
