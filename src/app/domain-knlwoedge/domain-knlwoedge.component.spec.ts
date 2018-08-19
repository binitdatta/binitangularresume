import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainKnlwoedgeComponent } from './domain-knlwoedge.component';

describe('DomainKnlwoedgeComponent', () => {
  let component: DomainKnlwoedgeComponent;
  let fixture: ComponentFixture<DomainKnlwoedgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainKnlwoedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainKnlwoedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
