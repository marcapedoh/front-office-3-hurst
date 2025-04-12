import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountProductComponent } from './discount-product.component';

describe('DiscountProductComponent', () => {
  let component: DiscountProductComponent;
  let fixture: ComponentFixture<DiscountProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountProductComponent]
    });
    fixture = TestBed.createComponent(DiscountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
