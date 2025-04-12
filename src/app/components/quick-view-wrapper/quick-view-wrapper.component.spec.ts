import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewWrapperComponent } from './quick-view-wrapper.component';

describe('QuickViewWrapperComponent', () => {
  let component: QuickViewWrapperComponent;
  let fixture: ComponentFixture<QuickViewWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickViewWrapperComponent]
    });
    fixture = TestBed.createComponent(QuickViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
