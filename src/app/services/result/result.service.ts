import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Result } from '../../classes/result'
import { MessageService } from '../message/message.service'

// Services provide the abilty to fetch and deliver data from outside of
// any angular components. Almost like a pseudo redux store
@Injectable({
  providedIn: 'root'
})

// Use Observable and of to simulate a http get request from a server
export class ResultService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.resultsUrl)
      .pipe(
        tap(_ => this.log('fetched results')),
        catchError(this.handleError<Result[]>('getResults', []))
      )
  }

  getResult(id: number): Observable<Result> {
    const url = `${this.resultsUrl}/${id}`
    return this.http.get<Result>(url)
      .pipe(
        tap(_ => this.log(`fetched result id=${id}`)),
        catchError(this.handleError<Result>(`getResult id=${id}`))
      )
  }

  addResult(result: Result): Observable<Result> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.resultsUrl, result, httpOptions)
      .pipe(
        tap((newResult: Result) => this.log(`added result id=${newResult.id}`)),
        catchError(this.handleError<Result>('addResult'))
      )
  }

  updateResult(result: Result): Observable<Result> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put<Result>(this.resultsUrl, result, httpOptions)
      .pipe(
        tap(_ => this.log(`updated result id=${result.id}`)),
        catchError(this.handleError<Result>('updateResult'))
      )
  }

  deleteResult(result: Result | number): Observable<Result> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof result === 'number' ? result : result.id
    const url = `${this.resultsUrl}/${id}`

    return this.http.delete<Result>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted result id=${id}`)),
        catchError(this.handleError<Result>('deleteResult'))
      )
  }

  searchResults(term: string): Observable<Result[]> {
    if(!term.trim()) {
      //Return empty array if searchterm is blank
      return of([])
    }
    return this.http.get<Result[]>(`${this.resultsUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found results matching "${term}"`)),
        catchError(this.handleError<Result[]>('searchResults', []))
      )
  }
  //this private log function exists only because we will call the add
  //method from MesageService constantly.
  private log(message: string) {
    this.messageService.add(`ResultService: ${message}`)
  }

  private resultsUrl = 'api/results' //URL to web API (localhost:4200/api/results)

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

