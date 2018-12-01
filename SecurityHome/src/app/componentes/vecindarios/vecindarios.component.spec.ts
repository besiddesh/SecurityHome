import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VecindariosComponent } from './vecindarios.component';

describe('VecindariosComponent', () => {
  let component: VecindariosComponent;
  let fixture: ComponentFixture<VecindariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecindariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecindariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
