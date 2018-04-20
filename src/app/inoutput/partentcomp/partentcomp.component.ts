import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-partentcomp',
  templateUrl: './partentcomp.component.html',
  styleUrls: ['./partentcomp.component.scss']
})
export class PartentcompComponent implements OnInit {

  public myname: String;
  public myevent: EventEmitter<any> = new EventEmitter();
  // public @Input() myname: String;
  // public @Output() myevent: EventEmitter = new EventEmitter();
  constructor() {
    console.log('ParentComp, myname not yet defined: ', this.myname);
  }
  fireMyEvent(evt) {
    this.myevent.next(['abc', 'def']);
}

  ngOnInit() {
  }

}
