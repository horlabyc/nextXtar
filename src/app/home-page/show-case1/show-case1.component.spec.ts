import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCase1Component } from './show-case1.component';

describe('ShowCase1Component', () => {
  let component: ShowCase1Component;
  let fixture: ComponentFixture<ShowCase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
