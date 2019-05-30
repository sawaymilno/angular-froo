import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('columns') columns: any[];
  @Input('data') data: any[];
  @Input('linkEach') linkEach: string = '';
  @Input('linkEachKey') linkEachKey: string = 'id';
  @Output() deleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete(obj: any): void {
    this.deleted.emit(obj)
  }
}
