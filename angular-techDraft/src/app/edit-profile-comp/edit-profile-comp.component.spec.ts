import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileCompComponent } from './edit-profile-comp.component';

describe('EditProfileCompComponent', () => {
  let component: EditProfileCompComponent;
  let fixture: ComponentFixture<EditProfileCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
