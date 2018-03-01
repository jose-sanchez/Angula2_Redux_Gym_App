import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent }      from './exercise-list/exercise-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'exerciseList',component: ExerciseListComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule {}
