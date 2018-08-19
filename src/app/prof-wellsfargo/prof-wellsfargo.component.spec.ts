import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfWellsfargoComponent } from './prof-wellsfargo.component';

describe('ProfWellsfargoComponent', () => {
  let component: ProfWellsfargoComponent;
  let fixture: ComponentFixture<ProfWellsfargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfWellsfargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfWellsfargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
