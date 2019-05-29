import { Component, OnInit } from '@angular/core';
import { Racer } from '../../classes/racer'
import { RacerService } from '../../services/racer/racer.service'
import { Result } from 'src/app/classes/result';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  racers: Racer[] = []
  results: Result[] = []

  constructor(
    private racerService: RacerService,
    private resultService: ResultService) { }

  ngOnInit() {
    this.getRacers()
  }

  getRacers(): void {
    this.resultService.getResults().subscribe(results=> {
      this.results = results.slice(0, 3)
      this.results.map(result => {
        const id = result.racerId
        this.racerService.getRacer(id).subscribe(racer => this.racers.push(racer))
      })
    })
  }

  // getRacers(): void {
  //   console.log('results from racers', this.results)
  //   this.results.map(result => {
  //     const id = result.racerId
  //     this.racerService.getRacer(id).subscribe(racer => this.racers.push(racer))
  //   })
  // }
}
