import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseService } from './exercise.service';
import {NgReduxModule,NgRedux} from 'ng2-redux';
import {store,IAppState} from './store';
import {ExerciseActions} from './exercise-list/exercise-list.actions';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationReactiveComponent } from './user-registration-reactive/user-registration-reactive.component';
//Required for Reactive forms
import {ReactiveFormsModule} from "@angular/forms";
import { TabComponent } from './share/tab/tab.component';
import { TabsComponent } from './share/tabs/tabs.component';
import { TabsContentChildrenQueryListComponent } from './share/tabs-content-children-query-list/tabs-content-children-query-list.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    UserRegistrationComponent,
    UserRegistrationReactiveComponent,
    TabComponent,
    TabsComponent,
    TabsContentChildrenQueryListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [ExerciseService,ExerciseActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  //  !! this constructor is required to wire up NGRedux with Angular
  constructor(ngRedux:NgRedux<IAppState>)
  {
    ngRedux.provideStore(store);
  }

 }
