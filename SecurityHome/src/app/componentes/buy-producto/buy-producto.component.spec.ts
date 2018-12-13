import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductoComponent } from './buy-producto.component';

describe('BuyProductoComponent', () => {
  let component: BuyProductoComponent;
  let fixture: ComponentFixture<BuyProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
