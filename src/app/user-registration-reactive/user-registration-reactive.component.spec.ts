import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationReactiveComponent } from './user-registration-reactive.component';

describe('UserRegistrationReactiveComponent', () => {
  let component: UserRegistrationReactiveComponent;
  let fixture: ComponentFixture<UserRegistrationReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
