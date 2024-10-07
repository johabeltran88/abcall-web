import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginAsComponent } from './auth-login-as.component';

describe('AuthLoginAsComponent', () => {
  let component: AuthLoginAsComponent;
  let fixture: ComponentFixture<AuthLoginAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginAsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
