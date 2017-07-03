import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

import { Observable, Observer } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { GETPAGE, SETPAGE } from '../store/page';

@Component({
  selector: '[app-step3]',
  templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {

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

  makePost() {
    let sendObject = JSON.stringify(this.model)
    fetch("api/user", {
      method: "POST",
      body: sendObject
    }).then(doThis.bind(this))
    function doThis(response) {
      return response.text().then(thenThis.bind(this));
    }

    function thenThis(text) {
      let parseString = JSON.parse(text)

      console.log('maString: ', parseString)

      this.userStore.setServerValue(parseString)

      this.router.navigate(['/summary']);
    }

    console.log("Posted!")
  }

  onSubmit() {

    this.userStore.setUserValue(this.model)
    console.log('Get user value: ', this.userStore.getUserValue())
    this.makePost()

  }

  ngOnInit() {
  }

}
