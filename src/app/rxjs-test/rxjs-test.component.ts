import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {RepoService} from './repo.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit {
  public items = Observable.of([1, 2, 3]);
  public repos: Observable<any>;
  public counter$: Observable<string> = new Subject<number>()
    .scan((acc: number, current: number): number => acc + current)
    .map((value: number): string => `Sum of clicks: ${value}`);

  constructor(repoService: RepoService) {
    this.repos = repoService.getReposForUser('auth0');
    this.repos.subscribe();
    this.repos.subscribe();

    this.counter$.subscribe(console.log.bind(console));
   }

  ngOnInit() {
  }

  handleButtonClick(value: number){
    console.log(value);
  }

}
