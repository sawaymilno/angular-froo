import { Component, OnInit } from '@angular/core'

import { Result } from '../../classes/result'
import { Racer } from '../../classes/racer'
import { ResultService } from '../../services/result/result.service'
import { RacerService } from '../../services/racer/racer.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: Result[]
  racers: Racer[]

  selectedResult: Result
  // resultService creates an asynchronous call for the result data
  constructor(
    private resultService: ResultService,
    private racerService: RacerService
  ) { }

  ngOnInit() {
    this.getResults()
    this.getRacers()
  }

  findRacer(id: number): Racer {
    return this.racers && this.racers.find(racer => racer.id == id)
  }

  getResults(): void {
    this.resultService.getResults().subscribe(results => {
      this.results = results

      console.log('loaded results', results)
    })
  }

  getRacers(): void {
    this.racerService.getRacers().subscribe(racers => this.racers = racers)
  }

  add(racerId: number, place: number, time: number): void {
    this.resultService.addResult({ racerId, place, time } as Result)
      .subscribe(result => {
        this.results.push(result)
      })
  }

  delete(result: Result): void {
    this.results = this.results.filter(t => t !== result)
    this.resultService.deleteResult(result).subscribe()
    //You need to subscribe  even if you dont do anything with the observable
    //the request doesn't go to the server unless it's subscribed
  }
}
