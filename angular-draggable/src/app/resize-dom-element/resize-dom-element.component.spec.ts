import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeDomElementComponent } from './resize-dom-element.component';

describe('ResizeDomElementComponent', () => {
  let component: ResizeDomElementComponent;
  let fixture: ComponentFixture<ResizeDomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeDomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeDomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
