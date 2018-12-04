import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FchatComponent } from './fchat.component';

describe('FchatComponent', () => {
  let component: FchatComponent;
  let fixture: ComponentFixture<FchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
