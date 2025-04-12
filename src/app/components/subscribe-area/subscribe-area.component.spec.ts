import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeAreaComponent } from './subscribe-area.component';

describe('SubscribeAreaComponent', () => {
  let component: SubscribeAreaComponent;
  let fixture: ComponentFixture<SubscribeAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeAreaComponent]
    });
    fixture = TestBed.createComponent(SubscribeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
