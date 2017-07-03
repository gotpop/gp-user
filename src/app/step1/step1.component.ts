import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { GETPAGE, SETPAGE } from '../store/page';

@Component({
  selector: '[app-step1]',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  constructor(private userStore: UserService, private router: Router, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  public page
  genders = ['Male', 'Female'];
  model = this.userStore.getUserValue()

  getPage(){
    this.store.dispatch({ type: GETPAGE });
  }

  setPage(){
    this.store.dispatch({ type: "SETPAGE", payload: {
      home: true,
      step1: true,
      step2: false,
      step3: false,
      summary: false
    } });
  }

  onSubmit() {

    this.setPage()

    this.userStore.setUserValue(this.model)
    console.log('Get user value: ', this.userStore.getUserValue())
    this.router.navigate(['/step2']);
  }

  ngOnInit() {
    this.model = this.userStore.makeUserModel()
  }

}
