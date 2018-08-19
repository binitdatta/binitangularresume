import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfOvationComponent } from './prof-ovation.component';

describe('ProfOvationComponent', () => {
  let component: ProfOvationComponent;
  let fixture: ComponentFixture<ProfOvationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfOvationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfOvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
