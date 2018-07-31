import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragExComponent } from './drag-ex.component';

describe('DragExComponent', () => {
  let component: DragExComponent;
  let fixture: ComponentFixture<DragExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
