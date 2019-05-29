import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo'
import { Racer } from '../../classes/racer'
import { TodoService } from '../../services/todo/todo.service'
import { RacerService } from '../../services/racer/racer.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  racers: Racer[] = []

  constructor(private racerService: RacerService) { }

  ngOnInit() {
    this.getRacers()
  }

  getRacers(): void {
    this.racerService.getRacers().subscribe(racers=> this.racers = racers.slice(1, 5))
  }
}
