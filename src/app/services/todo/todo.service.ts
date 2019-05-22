import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Todo } from '../../classes/todo'
import { MessageService } from '../message/message.service'

// Services provide the abilty to fetch and deliver data from outside of
// any angular components. Almost like a pseudo redux store
@Injectable({
  providedIn: 'root'
})

// Use Observable and of to simulate a http get request from a server
export class TodoService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        tap(_ => this.log('fetched todos')),
        catchError(this.handleError<Todo[]>('getTodos', []))
      )
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`
    return this.http.get<Todo>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      )
  }

  addTodo(todo: Todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.todosUrl, todo, httpOptions)
      .pipe(
        tap((newTodo: Todo) => this.log(`added todo id=${newTodo.id}`)),
        catchError(this.handleError<Todo>('addTodo'))
      )
  }

  updateTodo(todo: Todo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.todosUrl, todo, httpOptions)
      .pipe(
        tap(_ => this.log(`updated todo id=${todo.id}`)),
        catchError(this.handleError<any>('updateTodo'))
      )
  }

  deleteTodo(todo: Todo | number): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof todo === 'number' ? todo : todo.id
    const url = `${this.todosUrl}/${id}`

    return this.http.delete<Todo>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted todo id=${id}`)),
        catchError(this.handleError<Todo>('deleteTodo'))
      )
  }

  searchTodos(term: string): Observable<Todo[]> {
    if(!term.trim()) {
      //Return empty array if searchterm is blank
      return of([])
    }
    return this.http.get<Todo[]>(`${this.todosUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found todos matching "${term}"`)),
        catchError(this.handleError<Todo[]>('searchTodos', []))
      )
  }
  //this private log function exists only because we will call the add
  //method from MesageService constantly.
  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`)
  }

  private todosUrl = 'api/todos' //URL to web API (localhost:4200/api/todos)

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

