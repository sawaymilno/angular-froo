import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'

import { Racer } from 'src/app/classes/racer';
import { RacerService } from '../../services/racer/racer.service'

@Component({
  selector: 'app-racer-search',
  templateUrl: './racer-search.component.html',
  styleUrls: ['./racer-search.component.scss']
})
export class RacerSearchComponent implements OnInit {
  //racers$ is an observable, but we do not need to subscribe it here, as
  //that already happens in the template, with the AsyncPipe
  racers$: Observable<Racer[]>
  //A subject is a source of Observable values while being an Observable itself
  //It works the same way as any other Observable. We push values into it with search()
  private searchTerms = new Subject<string>()

  constructor(private racerService: RacerService) { }

  //Push a searchterm into Observable stream, byt using the Subject's .next() method
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.racers$ = this.searchTerms.pipe(
      //Wait 300ms after each keystroke before using it as a term
      debounceTime(300),

      //Ignore new term if it's the same as previous one
      distinctUntilChanged(),

      //Switch to a new search Observable each time the term changes
      //Only calls search for a term that passed the debounce time as
      //well as the distinctUntilChanged() check.
      switchMap((term: string) => this.racerService.searchRacers(term))
    )
  }

}
