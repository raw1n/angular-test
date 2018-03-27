import { Component, OnInit } from '@angular/core';

import {User} from './user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  private gender: string[];
  private user: User;

  constructor() { }

  ngOnInit() {
    this.gender = ['Male', 'Female', 'Others'];
    this.user = new User({
      email: 'fraaanz@franz.at',
      password: {
        pwd: '',
        confirm_pwd: '',
        gender: this.gender[0],
        terms: false
      }
    });
  }

}
