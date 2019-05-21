import { Component, OnInit } from '@angular/core'

import { Todo } from '../../classes/todo'
import { TodoService } from '../../services/todo/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  selectedTodo: Todo
  // todoService creates an asynchronous call for the todo data
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
}
