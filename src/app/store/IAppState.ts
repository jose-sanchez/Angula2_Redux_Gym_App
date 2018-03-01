
import {IExercise,ISession,IUser} from '../models'
export interface IAppState{
     exercises: IExercise[],
     users:IUser[]
}