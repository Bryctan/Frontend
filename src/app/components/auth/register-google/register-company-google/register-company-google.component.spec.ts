import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompanyGoogleComponent } from './register-company-google.component';

describe('RegisterCompanyGoogleComponent', () => {
  let component: RegisterCompanyGoogleComponent;
  let fixture: ComponentFixture<RegisterCompanyGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCompanyGoogleComponent]
    });
    fixture = TestBed.createComponent(RegisterCompanyGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
