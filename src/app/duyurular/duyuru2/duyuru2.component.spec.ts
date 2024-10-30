import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Duyuru2Component } from './duyuru2.component';

describe('Duyuru2Component', () => {
  let component: Duyuru2Component;
  let fixture: ComponentFixture<Duyuru2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Duyuru2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Duyuru2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
