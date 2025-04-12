import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOnlineAreaDeuxComponent } from './purchase-online-area-deux.component';

describe('PurchaseOnlineAreaDeuxComponent', () => {
  let component: PurchaseOnlineAreaDeuxComponent;
  let fixture: ComponentFixture<PurchaseOnlineAreaDeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOnlineAreaDeuxComponent]
    });
    fixture = TestBed.createComponent(PurchaseOnlineAreaDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
