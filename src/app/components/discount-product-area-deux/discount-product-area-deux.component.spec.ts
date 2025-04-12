import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountProductAreaDeuxComponent } from './discount-product-area-deux.component';

describe('DiscountProductAreaDeuxComponent', () => {
  let component: DiscountProductAreaDeuxComponent;
  let fixture: ComponentFixture<DiscountProductAreaDeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountProductAreaDeuxComponent]
    });
    fixture = TestBed.createComponent(DiscountProductAreaDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
