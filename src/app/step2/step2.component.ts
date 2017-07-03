import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

import { Observable, Observer } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { GETPAGE, SETPAGE } from '../store/page';

@Component({
  selector: '[app-step2]',
  templateUrl: './step2.component.html'
})
export class Step2Component implements OnInit {

  constructor(private userStore: UserService, private router: Router, private store: Store<any>) {
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
      step3: false,
      summary: false
    } });
  }

  onSubmit() {

    this.setPage()

    this.userStore.setUserValue(this.model)
    console.log('Get user value: ', this.userStore.getUserValue())
    this.router.navigate(['/step3']);

  }

  ngOnInit() {
  }
}
