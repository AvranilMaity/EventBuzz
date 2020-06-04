// tslint:disable-next-line: no-empty-interface
export interface IEvent{
    eventId?: number
    eventCreatedDate?: Date
    userId? : number
    eventName? : string
    eventDescription? : string
    eventImageUrl? : string
    eventLocation? : string
    eventCategory? : string
    eventFromDate? : Date
    eventToDate? : Date
    organizedType? : string
    organizerName? : string
    organizerPhone? : number
    organizerEmail? : string
    eventType? : string
    eventHeadCount? : string
    ticketQuantity? : string
    ticketPrice? : string
    
}
