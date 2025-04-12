import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaDeuxComponent } from './blog-area-deux.component';

describe('BlogAreaDeuxComponent', () => {
  let component: BlogAreaDeuxComponent;
  let fixture: ComponentFixture<BlogAreaDeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAreaDeuxComponent]
    });
    fixture = TestBed.createComponent(BlogAreaDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
