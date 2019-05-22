import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkGroupComponent } from './nav-link-group.component';

describe('NavLinkGroupComponent', () => {
  let component: NavLinkGroupComponent;
  let fixture: ComponentFixture<NavLinkGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLinkGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
