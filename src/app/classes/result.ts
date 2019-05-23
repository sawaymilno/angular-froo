import { Observable } from 'rxjs'

import { RacerService } from '../services/racer/racer.service'
import { Racer } from './racer'

export class Result {
  id: number
  racerId: number
  place: number
  time: number
  racer: Racer

  constructor(
    private racerService: RacerService
  ) {
    console.log('result constructor')
  }

  public loadRacer(): void {
    this.racerService.getRacer(this.racerId).subscribe(racer => this.racer = racer)
  }
}
