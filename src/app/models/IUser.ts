import {ISession} from '../models';
export interface IUser{
    id:number,
    userName:string,
    lastName:string,
    birthday:Date,
    password:string,
    sessions:ISession[]
}