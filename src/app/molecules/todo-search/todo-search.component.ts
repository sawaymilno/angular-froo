import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'

import { Todo } from '../../classes/todo'
import { TodoService } from '../../services/todo/todo.service'

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent implements OnInit {
  //todos$ is an observable, but we do not need to subscribe it here, as
  //that already happens in the template, with the AsyncPipe
  todos$: Observable<Todo[]>
  //A subject is a source of Observable values while being an Observable itself
  //It works the same way as any other Observable. We push values into it with search()
  private searchTerms = new Subject<string>()

  constructor(private todoService: TodoService) { }

  //Push a searchterm into Observable stream, byt using the Subject's .next() method
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.todos$ = this.searchTerms.pipe(
      //Wait 300ms after each keystroke before using it as a term
      debounceTime(300),

      //Ignore new term if it's the same as previous one
      distinctUntilChanged(),

      //Switch to a new search Observable each time the term changes
      //Only calls search for a term that passed the debounce time as
      //well as the distinctUntilChanged() check.
      switchMap((term: string) => this.todoService.searchTodos(term))
    )
  }

}
