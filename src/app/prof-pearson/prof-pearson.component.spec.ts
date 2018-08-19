import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPearsonComponent } from './prof-pearson.component';

describe('ProfPearsonComponent', () => {
  let component: ProfPearsonComponent;
  let fixture: ComponentFixture<ProfPearsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfPearsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPearsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
