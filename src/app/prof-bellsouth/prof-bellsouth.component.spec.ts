import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBellsouthComponent } from './prof-bellsouth.component';

describe('ProfBellsouthComponent', () => {
  let component: ProfBellsouthComponent;
  let fixture: ComponentFixture<ProfBellsouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfBellsouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfBellsouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
