import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Observer } from 'rxjs/Rx'
import { UserService } from '../shared/user.service'
import { GETPAGE, SETPAGE } from '../store/page'

@Component({
  selector: '[app-step1]',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  public page
  public genders = ['Male', 'Female']
  public model = this.userStore.getUserValue()

  constructor(private userStore: UserService, private router: Router, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  setPage() {
    this.store.dispatch({
      type: "SETPAGE", payload: {
        home: true,
        step1: true,
        step2: false,
        step3: false,
        summary: false
      }
    })
  }

  onSubmit() {
    this.userStore.setUserValue(this.model)
    this.router.navigate(['/step2'])
  }

  ngOnInit() {
    this.setPage()
    if ( this.model === undefined ) {
      this.model = this.userStore.makeUserModel()
    }
  }

}
