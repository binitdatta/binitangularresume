import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExperienceComponent } from './prof-experience.component';

describe('ProfExperienceComponent', () => {
  let component: ProfExperienceComponent;
  let fixture: ComponentFixture<ProfExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
