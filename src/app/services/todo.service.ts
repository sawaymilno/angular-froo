import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'
import { TODOS } from '../mock-data'
import { Observable, of } from 'rxjs'

// Services provide the abilty to fetch and deliver data from outside of
// any angular components. Almost like a pseudo redux store
@Injectable({
  providedIn: 'root'
})

// Use Observable and of to simulate a http get request from a server
export class TodoService {
  getTodos(): Observable<Todo[]> {
    return of (TODOS)
  }

  constructor() { }
}
