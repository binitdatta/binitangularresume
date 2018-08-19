import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfNtComponent } from './prof-nt.component';

describe('ProfNtComponent', () => {
  let component: ProfNtComponent;
  let fixture: ComponentFixture<ProfNtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfNtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
