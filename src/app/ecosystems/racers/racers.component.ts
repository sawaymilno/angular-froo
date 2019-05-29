import { Component, OnInit } from '@angular/core';
import { Racer } from 'src/app/classes/racer';
import { RacerService } from 'src/app/services/racer/racer.service';

@Component({
  selector: 'app-racers',
  templateUrl: './racers.component.html',
  styleUrls: ['./racers.component.scss']
})
export class RacersComponent implements OnInit {
  racers: Racer[]

  constructor(private racerService: RacerService) { }

  ngOnInit() {
    this.getRacers()
  }

  getRacers() {
    this.racerService.getRacers().subscribe(racers => this.racers = racers)
  }

  add(firstName: string, lastName: string): void {
    firstName = firstName.trim()
    lastName = lastName.trim()
    if(!firstName || !lastName) { return }
    this.racerService.addRacer({ firstName, lastName } as Racer).subscribe(racer => this.racers.push(racer))
  }

  delete(racer: Racer): void {
    this.racers = this.racers.filter(t => t !== racer)
    this.racerService.deleteRacer(racer).subscribe()
  }
}
