import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Duyuru3Component } from './duyuru3.component';

describe('Duyuru3Component', () => {
  let component: Duyuru3Component;
  let fixture: ComponentFixture<Duyuru3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Duyuru3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Duyuru3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
