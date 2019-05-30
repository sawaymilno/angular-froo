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
  tableData: Object[]

  selectedResult: Result
  // resultService creates an asynchronous call for the result data

  tableColumns: Object[] = [
    { label: 'Place', field: 'place' },
    { label: 'Time', field: 'time' },
    { label: 'Last Name', field: 'lastName' },
    { label: 'First Name', field: 'firstName' }
  ]
  constructor(
    private resultService: ResultService,
    private racerService: RacerService
  ) { }

  ngOnInit() {
    this.getRacers()
    // this.getResults()
  }

  findRacer(id: number): Racer {
    return this.racers && this.racers.find(racer => racer.id == id)
  }

  getTableData(): void {
    this.tableData = this.results.map(result => {
      const racer = this.findRacer(result.racerId)

      return Object.assign({}, result, {
        firstName: racer && racer.firstName,
        lastName: racer && racer.lastName
      })
    })
  }

  getResults(): void {
    this.resultService.getResults().subscribe(results => {
      this.results = results

      this.getTableData()
    })
  }

  getRacers(): void {
    this.racerService.getRacers().subscribe(racers => {
      this.racers = racers
      this.getResults()
    })
  }

  add(racerId: number, place: number, time: number): void {
    this.resultService.addResult({ racerId, place, time } as Result)
      .subscribe(result => {
        this.results.push(result)
      })
  }

  delete(result: Result): void {
    this.results = this.results.filter(t => t.id !== result.id)
    this.getTableData()
    this.resultService.deleteResult(result).subscribe()
    //You need to subscribe  even if you dont do anything with the observable
    //the request doesn't go to the server unless it's subscribed
  }
}
