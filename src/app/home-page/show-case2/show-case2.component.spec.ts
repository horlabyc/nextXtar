import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCase2Component } from './show-case2.component';

describe('ShowCase2Component', () => {
  let component: ShowCase2Component;
  let fixture: ComponentFixture<ShowCase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
