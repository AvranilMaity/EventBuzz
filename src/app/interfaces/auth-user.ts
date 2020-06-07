import { IUser } from './user';
import { IUserDetails } from './user-details';

export interface IAuthUser{
    user:IUser;
    userDetails?:IUserDetails;
    message?: string;
}
