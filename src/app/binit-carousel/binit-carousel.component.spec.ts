import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinitCarouselComponent } from './binit-carousel.component';

describe('BinitCarouselComponent', () => {
  let component: BinitCarouselComponent;
  let fixture: ComponentFixture<BinitCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinitCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinitCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
