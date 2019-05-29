import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Racer } from '../../classes/racer'
import { MessageService } from '../message/message.service'

// Services provide the abilty to fetch and deliver data from outside of
// any angular components. Almost like a pseudo redux store
@Injectable({
  providedIn: 'root'
})

// Use Observable and of to simulate a http get request from a server
export class RacerService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getRacers(): Observable<Racer[]> {
    return this.http.get<Racer[]>(this.racersUrl)
      .pipe(
        tap(_ => this.log('fetched racers')),
        catchError(this.handleError<Racer[]>('getRacers', []))
      )
  }

  getRacer(id: number): Observable<Racer> {
    const url = `${this.racersUrl}/${id}`
    return this.http.get<Racer>(url)
      .pipe(
        tap(_ => this.log(`fetched racer id=${id}`)),
        catchError(this.handleError<Racer>(`getRacer id=${id}`))
      )
  }

  addRacer(racer: Racer): Observable<Racer> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.racersUrl, racer, httpOptions)
      .pipe(
        tap((newRacer: Racer) => this.log(`added racer id=${newRacer.id}`)),
        catchError(this.handleError<Racer>('addRacer'))
      )
  }

  updateRacer(racer: Racer): Observable<Racer> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put<Racer>(this.racersUrl, racer, httpOptions)
      .pipe(
        tap(_ => this.log(`updated racer id=${racer.id}`)),
        catchError(this.handleError<Racer>('updateRacer'))
      )
  }

  deleteRacer(racer: Racer | number): Observable<Racer> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const id = typeof racer === 'number' ? racer : racer.id
    const url = `${this.racersUrl}/${id}`

    return this.http.delete<Racer>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted racer id=${id}`)),
        catchError(this.handleError<Racer>('deleteRacer'))
      )
  }

  searchRacers(term: string): Observable<Racer[]> {
    if(!term.trim()) {
      //Return empty array if searchterm is blank
      return of([])
    }
    return this.http.get<Racer[]>(`${this.racersUrl}/?firstName=${term}`)
      .pipe(
        tap(_ => this.log(`found racers matching "${term}"`)),
        catchError(this.handleError<Racer[]>('searchRacers', []))
      )
  }
  //this private log function exists only because we will call the add
  //method from MesageService constantly.
  private log(message: string) {
    this.messageService.add(`RacerService: ${message}`)
  }

  private racersUrl = 'api/racers' //URL to web API (localhost:4200/api/racers)

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

