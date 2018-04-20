import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inoutput',
  templateUrl: './inoutput.component.html',
  styleUrls: ['./inoutput.component.scss']
})
export class InoutputComponent implements OnInit {
  myFriend = '';

  constructor() {
    this.myFriend = 'Josephine Wind';
   }

  ngOnInit() {
  }

}
