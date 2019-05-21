import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'

import { Todo } from '../../classes/todo'
import { TODOS } from '../../mock-data'
import { MessageService } from '../message/message.service'

// Services provide the abilty to fetch and deliver data from outside of
// any angular components. Almost like a pseudo redux store
@Injectable({
  providedIn: 'root'
})

// Use Observable and of to simulate a http get request from a server
export class TodoService {
  constructor(private messageService: MessageService) { }

  getTodos(): Observable<Todo[]> {
    this.messageService.add('TodoService: fetched todos')
    return of(TODOS)
  }

}
