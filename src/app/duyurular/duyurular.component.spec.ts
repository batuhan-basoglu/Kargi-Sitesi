import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyurularComponent } from './duyurular.component';

describe('DuyurularComponent', () => {
  let component: DuyurularComponent;
  let fixture: ComponentFixture<DuyurularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuyurularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyurularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
