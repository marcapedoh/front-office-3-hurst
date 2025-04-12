import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOnlineComponent } from './purchase-online.component';

describe('PurchaseOnlineComponent', () => {
  let component: PurchaseOnlineComponent;
  let fixture: ComponentFixture<PurchaseOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOnlineComponent]
    });
    fixture = TestBed.createComponent(PurchaseOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
