import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingTableComponent } from './shipping-table.component';

describe('ShippingTableComponent', () => {
  let component: ShippingTableComponent;
  let fixture: ComponentFixture<ShippingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
