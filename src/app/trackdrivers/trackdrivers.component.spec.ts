import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdriversComponent } from './trackdrivers.component';

describe('TrackdriversComponent', () => {
  let component: TrackdriversComponent;
  let fixture: ComponentFixture<TrackdriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
