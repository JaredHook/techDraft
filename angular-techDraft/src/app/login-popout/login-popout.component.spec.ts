import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopoutComponent } from './login-popout.component';

describe('LoginPopoutComponent', () => {
  let component: LoginPopoutComponent;
  let fixture: ComponentFixture<LoginPopoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPopoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
