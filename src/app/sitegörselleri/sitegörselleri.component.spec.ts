import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitegörselleriComponent } from './sitegörselleri.component';

describe('SitegörselleriComponent', () => {
  let component: SitegörselleriComponent;
  let fixture: ComponentFixture<SitegörselleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitegörselleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitegörselleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
