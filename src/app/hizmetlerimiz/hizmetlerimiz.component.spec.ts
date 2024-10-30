import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetlerimizComponent } from './hizmetlerimiz.component';

describe('HizmetlerimizComponent', () => {
  let component: HizmetlerimizComponent;
  let fixture: ComponentFixture<HizmetlerimizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HizmetlerimizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetlerimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
