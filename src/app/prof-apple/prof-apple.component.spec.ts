import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfAppleComponent } from './prof-apple.component';

describe('ProfAppleComponent', () => {
  let component: ProfAppleComponent;
  let fixture: ComponentFixture<ProfAppleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfAppleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
