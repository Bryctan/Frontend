import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGoogleGrocerComponent } from './login-google-grocer.component';

describe('LoginGoogleGrocerComponent', () => {
  let component: LoginGoogleGrocerComponent;
  let fixture: ComponentFixture<LoginGoogleGrocerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGoogleGrocerComponent]
    });
    fixture = TestBed.createComponent(LoginGoogleGrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
