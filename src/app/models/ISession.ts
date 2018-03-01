import {IExercise,IExerciseSet} from '../models';
export interface ISession{
    exercises:IExerciseSet[],
    gym:String,
    date:Date
}

