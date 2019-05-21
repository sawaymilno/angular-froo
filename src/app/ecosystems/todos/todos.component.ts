import { Component, OnInit } from '@angular/core'
import { Todo } from '../../classes/todo'
import { TODOS } from '../../mock-data'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = TODOS

  selectedTodo: Todo
  onSelect(todo:  Todo): void {
    this.selectedTodo = todo
  }

  constructor() { }

  ngOnInit() {

  }

}
