import { IEvent } from './event';
import { IRegistration } from './registration';

export interface ICreateEvent{
    event:IEvent;
    registration:IRegistration[];
}