import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderComponent } from './atender.component';

describe('AtenderComponent', () => {
  let component: AtenderComponent;
  let fixture: ComponentFixture<AtenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
