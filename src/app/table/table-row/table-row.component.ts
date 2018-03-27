import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() characters: any;
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
