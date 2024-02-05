import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMainGoogleComponent } from './register-main-google.component';

describe('RegisterMainGoogleComponent', () => {
  let component: RegisterMainGoogleComponent;
  let fixture: ComponentFixture<RegisterMainGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterMainGoogleComponent]
    });
    fixture = TestBed.createComponent(RegisterMainGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
