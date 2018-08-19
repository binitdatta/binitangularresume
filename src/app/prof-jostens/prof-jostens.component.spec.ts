import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfJostensComponent } from './prof-jostens.component';

describe('ProfJostensComponent', () => {
  let component: ProfJostensComponent;
  let fixture: ComponentFixture<ProfJostensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfJostensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfJostensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
