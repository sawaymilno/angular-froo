import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-toggle',
  templateUrl: './radio-toggle.component.html',
  styleUrls: ['./radio-toggle.component.scss']
})
export class RadioToggleComponent implements OnInit {
  @Input('option1') option1: string;
  @Input('option2') option2: string;
  @Input('label') label: string
  constructor() { }

  ngOnInit() {
  }

}
