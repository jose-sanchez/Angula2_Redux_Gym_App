import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { IExercise } from '../models/IExercise'
import { store,IAppState } from '../store'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import {NgRedux,select} from 'ng2-redux';
import { ExerciseActions } from './exercise-list.actions';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})

export class ExerciseListComponent implements OnInit {
  // with the inclusion of the ngRedux  exercise4# start to work
  constructor(private _exerciseService: ExerciseService,
              private ngRedux:NgRedux<IAppState>,
              private exerciseListActions:ExerciseActions) {

  }
  public exercises: IExercise[] = [];
  public exercises2: IExercise[] = [];
  public exercises3: IExercise[] = [];

  

  //ngRedux way of getting properties from the store
  @select((state)=> state.exercises) exercises4$: Observable<IExercise>

  //Normal retrieval of data without Redux
  getExercises() {
    this._exerciseService.getExercisesHttpModule().subscribe((data) => {
      this.exercises = data;
    },
      (error) => { console.log(error) }
    );
  }

    getExercisesHttpRequest() {
          this._exerciseService.getExercisesObservableHttpRequest().subscribe(
      (data2) => {
        console.log(data2);
        this.exercises2 = data2;
      },
      (error) => { console.log(error) }
    );
    }

updateFromState(){
  const allState = store.getState();
  this.exercises3 = allState.exercises;
}

  ngOnInit() {
  //Normal retrieval of data without Redux
    this.getExercises();
  //Retrieval with  HttpRequest
    this.getExercisesHttpRequest()

    //Redux retrieval without NgRedux  ------
    //Initial call
    this.updateFromState();
    //subscribe for future calls
    store.subscribe(()=>{
      this.updateFromState();
    })
    //----------------------------------------
    //with NG redux -- This action will refresh the content of all exercise variables
    
    this.exerciseListActions.getExercises();
  }
}
