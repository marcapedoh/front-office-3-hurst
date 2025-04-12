import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAreaDeuxComponent } from './product-area-deux.component';

describe('ProductAreaDeuxComponent', () => {
  let component: ProductAreaDeuxComponent;
  let fixture: ComponentFixture<ProductAreaDeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAreaDeuxComponent]
    });
    fixture = TestBed.createComponent(ProductAreaDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
