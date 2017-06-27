import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'GotPop User';
  collectables = [
    { description: 'Lorem ipsum dolor sit amet, consectetur', type: 'book' },
    { description: 'Lorem ipsum dolor sit amet, consectetur', type: 'book' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
