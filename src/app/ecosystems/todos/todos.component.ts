import { Component, OnInit } from '@angular/core'
import { Todo } from '../../classes/todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]

  selectedTodo: Todo

  onSelect(todo:  Todo): void {
    this.selectedTodo = todo
  }

  // todoService creates an asynchronous call for the todo data
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

}
