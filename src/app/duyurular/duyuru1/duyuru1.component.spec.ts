import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Duyuru1Component } from './duyuru1.component';

describe('Duyuru1Component', () => {
  let component: Duyuru1Component;
  let fixture: ComponentFixture<Duyuru1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Duyuru1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Duyuru1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
