import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropChartComponent } from './drag-drop-chart.component';

describe('DragDropChartComponent', () => {
  let component: DragDropChartComponent;
  let fixture: ComponentFixture<DragDropChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
