import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

import { Observable, Observer } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { GETPAGE, SETPAGE } from '../store/page';

@Component({
  selector: '[app-summary]',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  serverStore

  constructor(private userStore: UserService, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  public page
  model = this.userStore.getUserValue()

  getPage(){
    this.store.dispatch({ type: GETPAGE });
  }

  setPage(){
    this.store.dispatch({ type: "SETPAGE", payload: {
      home: true,
      step1: true,
      step2: true,
      step3: true,
      summary: true
    } });
  }

  ngOnInit() {
    this.serverStore = this.userStore.getServerValue()
    console.log('Ma server store', this.serverStore)
  }

}
