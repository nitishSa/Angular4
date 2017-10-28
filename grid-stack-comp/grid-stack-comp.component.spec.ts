import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStackCompComponent } from './grid-stack-comp.component';

describe('GridStackCompComponent', () => {
  let component: GridStackCompComponent;
  let fixture: ComponentFixture<GridStackCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStackCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStackCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
