import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';
import { ExerciseService } from '../exercise.service';
export const GET_EXERCISES = 'exercises/GET'

@Injectable()
export class ExerciseActions{
    constructor(
        private ngRedux:NgRedux<IAppState>,
        private exerciseService:ExerciseService
    ){  }

  public getExercises(){
      this.exerciseService.getExercisesHttpModule()
      .subscribe(exercises=>{
          this.ngRedux.dispatch({
            type:GET_EXERCISES,
            exercises
          });
      });
  }
}