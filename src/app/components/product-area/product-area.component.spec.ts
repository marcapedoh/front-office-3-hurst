import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaComponent } from './product-area.component';

describe('ProductAreaComponent', () => {
  let component: ProductAreaComponent;
  let fixture: ComponentFixture<ProductAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAreaComponent]
    });
    fixture = TestBed.createComponent(ProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
