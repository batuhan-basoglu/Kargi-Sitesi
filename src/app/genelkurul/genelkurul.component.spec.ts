import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenelkurulComponent } from './genelkurul.component';

describe('GenelkurulComponent', () => {
  let component: GenelkurulComponent;
  let fixture: ComponentFixture<GenelkurulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenelkurulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenelkurulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
