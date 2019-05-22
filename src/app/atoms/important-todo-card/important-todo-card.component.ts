import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-important-todo-card',
  templateUrl: './important-todo-card.component.html',
  styleUrls: ['./important-todo-card.component.scss']
})
export class ImportantTodoCardComponent implements OnInit {
  @Input('name') name: string
  @Input('id') id: string
  constructor() { }

  ngOnInit() {
  }

}
