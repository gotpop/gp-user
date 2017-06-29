import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'GotPop User';

  constructor(private userStore: UserService) { }

  home = true

  ngOnInit() {

  }

}
