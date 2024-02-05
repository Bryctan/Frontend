import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGoogleCompanyComponent } from './login-google-company.component';

describe('LoginGoogleCompanyComponent', () => {
  let component: LoginGoogleCompanyComponent;
  let fixture: ComponentFixture<LoginGoogleCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginGoogleCompanyComponent]
    });
    fixture = TestBed.createComponent(LoginGoogleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
