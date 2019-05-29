import { Component, OnInit } from '@angular/core'

import { Todo } from '../../classes/todo'
import { Racer } from '../../classes/racer'
import { TodoService } from '../../services/todo/todo.service'
import { RacerService } from '../../services/racer/racer.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
  racers: Racer[]

  selectedTodo: Todo
  // todoService creates an asynchronous call for the todo data
  constructor(
    private todoService: TodoService,
    private racerService: RacerService
  ) { }

  ngOnInit() {
    this.getTodos()
    this.getRacers()
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  getRacers(): void {
    this.racerService.getRacers().subscribe(racers => this.racers = racers)
  }

  add(name: string): void {
    name = name.trim()
    if(!name) { return }
    this.todoService.addTodo({ name } as Todo)
      .subscribe(todo => {
        this.todos.push(todo)
      })
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo)
    this.todoService.deleteTodo(todo).subscribe()
    //You need to subscribe  even if you dont do anything with the observable
    //the request doesn't go to the server unless it's subscribed
  }
}
