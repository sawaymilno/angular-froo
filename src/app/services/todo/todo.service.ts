import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

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
        tap(_ => this.log(`Fetched hero id=${id}`)),
        catchError(this.handleError<Todo>(`getTodo id=${id}`))
      )
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`)
  }

  private todosUrl = 'api/todos' //URL to web API

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
