import {ISession,IUser} from '../models';

export class User{
    public id:number;
    public userName:string;
    public lastName:string;
    public birthday:Date;
    public password:string;
    public sessions:ISession[];
}