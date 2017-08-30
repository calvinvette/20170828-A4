import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingViewComponent } from './shipping-view.component';

describe('ShippingViewComponent', () => {
  let component: ShippingViewComponent;
  let fixture: ComponentFixture<ShippingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
