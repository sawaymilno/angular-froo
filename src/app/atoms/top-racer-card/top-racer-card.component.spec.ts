import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRacerCardComponent } from './top-racer-card.component';

describe('TopRacerCardComponent', () => {
  let component: TopRacerCardComponent;
  let fixture: ComponentFixture<TopRacerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRacerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRacerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
