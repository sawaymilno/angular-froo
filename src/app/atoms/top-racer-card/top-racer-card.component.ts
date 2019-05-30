import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-racer-card',
  templateUrl: './top-racer-card.component.html',
  styleUrls: ['./top-racer-card.component.scss']
})
export class TopRacerCardComponent implements OnInit {
  @Input('lastName') lastName: string
  @Input('firstName') firstName: string
  @Input('id') id: string
  constructor() { }

  ngOnInit() {
  }

}
