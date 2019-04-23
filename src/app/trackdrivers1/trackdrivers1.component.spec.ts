import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trackdrivers1Component } from './trackdrivers1.component';

describe('Trackdrivers1Component', () => {
  let component: Trackdrivers1Component;
  let fixture: ComponentFixture<Trackdrivers1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trackdrivers1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trackdrivers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
