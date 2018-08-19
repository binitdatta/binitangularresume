import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSummaryComponent } from './prof-summary.component';

describe('ProfSummaryComponent', () => {
  let component: ProfSummaryComponent;
  let fixture: ComponentFixture<ProfSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
