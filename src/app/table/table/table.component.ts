import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../adventure-time.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  providers: [AdventureTimeService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

}
