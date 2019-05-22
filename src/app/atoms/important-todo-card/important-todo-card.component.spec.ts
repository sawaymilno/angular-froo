import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTodoCardComponent } from './important-todo-card.component';

describe('ImportantTodoCardComponent', () => {
  let component: ImportantTodoCardComponent;
  let fixture: ComponentFixture<ImportantTodoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantTodoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantTodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
