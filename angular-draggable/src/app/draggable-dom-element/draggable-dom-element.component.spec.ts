import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDomElementComponent } from './draggable-dom-element.component';

describe('DraggableDomElementComponent', () => {
  let component: DraggableDomElementComponent;
  let fixture: ComponentFixture<DraggableDomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableDomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableDomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
