import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCoalindiaComponent } from './prof-coalindia.component';

describe('ProfCoalindiaComponent', () => {
  let component: ProfCoalindiaComponent;
  let fixture: ComponentFixture<ProfCoalindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfCoalindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfCoalindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
