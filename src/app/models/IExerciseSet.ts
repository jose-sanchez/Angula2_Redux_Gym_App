import {IExercise} from '../models';
export interface IExerciseSet{
    exercise:IExercise,
    repetitions: number[],
    restPeriod:number
    weight:number;
}