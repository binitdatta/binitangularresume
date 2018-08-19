import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfNokiaComponent } from './prof-nokia.component';

describe('ProfNokiaComponent', () => {
  let component: ProfNokiaComponent;
  let fixture: ComponentFixture<ProfNokiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfNokiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfNokiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
