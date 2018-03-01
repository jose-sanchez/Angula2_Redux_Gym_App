import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IUser, User } from '../models';
@Component({
  selector: 'app-user-registration-reactive',
  templateUrl: './user-registration-reactive.component.html',
  styleUrls: ['./user-registration-reactive.component.scss']
})
export class UserRegistrationReactiveComponent implements OnInit {
  private user: IUser = new User();
  form: FormGroup;

  userName = new FormControl("to fill", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "userName": this.userName,
      "lastName": ["to fill", Validators.required],
      "birthday": ["to fill", Validators.required],
      "password": ["", Validators.required]
    });
  }
  fullUpdate() {
    this.form.patchValue({ userName: 'Partial',lastNameName: 'Partial',birthday: 'Partial', password: 'monkey' });
  }

  partialUpdate() {
    this.form.patchValue({ userName: 'Partial' });
  }
  reset() {
    this.form.reset();
}
  onSubmit() {
    console.log("model-based form submitted");
    console.log(this.form);
  }
  ngOnInit() {
    this.form.valueChanges
      //check every 5 seconds for autosaving
      .debounceTime(5000)
      .map((value) => {
        //possible change example adding a sufix "USER"
        value.userName = value.userName + "USER";
        return value;
      })
      .filter((value) => this.form.valid)
      .subscribe((value) => {
        console.log("Model Driven Form valid value: vm = ", JSON.stringify(value));
        this.user = value;
        this.saveUser();
      });
  }
    saveUser()
  {
        console.log("Saving user",this.user);
  }
}

