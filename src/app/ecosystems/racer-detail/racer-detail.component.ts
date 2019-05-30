import { Component, OnInit, Input } from '@angular/core';
import { Racer } from 'src/app/classes/racer';
import { ActivatedRoute } from '@angular/router';
import { RacerService } from 'src/app/services/racer/racer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-racer-detail',
  templateUrl: './racer-detail.component.html',
  styleUrls: ['./racer-detail.component.scss']
})
export class RacerDetailComponent implements OnInit {
  @Input() racer: Racer

  constructor(
    private Route: ActivatedRoute,
    private racerService: RacerService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRacer()
  }

  getRacer(): void {
    const id = +this.Route.snapshot.paramMap.get('id')
    this.racerService.getRacer(id).subscribe(racer => this.racer = racer)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.racerService.updateRacer(this.racer).subscribe(() => this.goBack())
  }
}
