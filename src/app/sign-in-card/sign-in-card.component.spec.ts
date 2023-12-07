import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCardComponent } from './sign-in-card.component';

describe('SignInCardComponent', () => {
  let component: SignInCardComponent;
  let fixture: ComponentFixture<SignInCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInCardComponent]
    });
    fixture = TestBed.createComponent(SignInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
