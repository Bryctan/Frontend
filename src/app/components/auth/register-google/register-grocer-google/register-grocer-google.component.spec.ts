import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGrocerGoogleComponent } from './register-grocer-google.component';

describe('RegisterGrocerGoogleComponent', () => {
  let component: RegisterGrocerGoogleComponent;
  let fixture: ComponentFixture<RegisterGrocerGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGrocerGoogleComponent]
    });
    fixture = TestBed.createComponent(RegisterGrocerGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
