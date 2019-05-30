import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('categories') categories: any[]
  @Input('data') dataToShow: any[]
  objectKeys = Object.keys
  constructor() { }

  ngOnInit() {
  }
}
