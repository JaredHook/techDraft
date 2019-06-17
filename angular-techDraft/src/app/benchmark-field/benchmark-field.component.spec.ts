import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkFieldComponent } from './benchmark-field.component';

describe('BenchmarkFieldComponent', () => {
  let component: BenchmarkFieldComponent;
  let fixture: ComponentFixture<BenchmarkFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
