import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboComponent } from './robo.component';

describe('RoboComponent', () => {
  let component: RoboComponent;
  let fixture: ComponentFixture<RoboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
