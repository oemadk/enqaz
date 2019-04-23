import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoffComponent } from './setoff.component';

describe('SetoffComponent', () => {
  let component: SetoffComponent;
  let fixture: ComponentFixture<SetoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
