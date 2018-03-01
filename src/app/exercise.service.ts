import { Injectable } from '@angular/core';
//Is important to specify the path so that just the specific code is load and the size of the request is smaller
import { Observable } from 'rxjs/Observable'
import { mergeMap } from 'rxjs/operator/mergeMap'
import {IExercise} from './models/IExercise'
//For method getExercisesHttpModule
import{ Http,Response}  from '@angular/http';
const exerciseUrl = "http://swapi.co/api/people/"
const exerciseNodeJsApiUrl = "http://localhost:3000/API/exercises/"

@Injectable()
export class ExerciseService {

  constructor(private _htpp:Http) { }

  public getExercisesObservableHttpRequest() {
    return Observable.create(observer => {
      let request = new XMLHttpRequest();
      request.addEventListener("load", () => {
        let data = JSON.parse(request.responseText);
        let i = 0;
        console.log(data.results);
        observer.next(data.results);

      })

      request.open("GET", exerciseUrl);
      request.send();
    });
  }


    public getExercisesHttpModule():Observable<IExercise[]> {
    return this._htpp.get (exerciseNodeJsApiUrl)
              .map( (res:Response)=> res.json().results)
              .catch(this.handleError);
    };

    handleError(error:any){
      console.log(error);
      return Observable.throw(error.json.error ||'Server Error');
    }
}
