import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSearsComponent } from './prof-sears.component';

describe('ProfSearsComponent', () => {
  let component: ProfSearsComponent;
  let fixture: ComponentFixture<ProfSearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfSearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
