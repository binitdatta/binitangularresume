import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExpressScriptsComponent } from './prof-express-scripts.component';

describe('ProfExpressScriptsComponent', () => {
  let component: ProfExpressScriptsComponent;
  let fixture: ComponentFixture<ProfExpressScriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfExpressScriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfExpressScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
