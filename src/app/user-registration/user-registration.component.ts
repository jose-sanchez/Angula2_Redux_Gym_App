import { Component, OnInit } from '@angular/core';
import {IUser,User} from '../models';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  private user:IUser = new User;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }


}
