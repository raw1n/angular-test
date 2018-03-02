import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  private words: any;

  constructor(private wordservice: WordService) { }

  ngOnInit() {
  }

  search(term) {
    this.wordservice.search_word(term).subscribe(res => {
      this.words = res;
    });
  }
}
