import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Froo12Component } from './froo12.component';

describe('Froo12Component', () => {
  let component: Froo12Component;
  let fixture: ComponentFixture<Froo12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Froo12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Froo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
