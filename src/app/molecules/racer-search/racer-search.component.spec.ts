import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerSearchComponent } from './racer-search.component';

describe('RacerSearchComponent', () => {
  let component: RacerSearchComponent;
  let fixture: ComponentFixture<RacerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
