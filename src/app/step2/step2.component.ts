import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Observer } from 'rxjs/Rx'
import { UserService } from '../shared/user.service'
import { GETPAGE, SETPAGE } from '../store/page'
import { fadeInAnimation } from '../animations/fade'

@Component({
  selector: '[app-step2]',
  templateUrl: './step2.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class Step2Component implements OnInit {

  public page
  public model = this.userStore.getUserValue()

  constructor(private userStore: UserService, private router: Router, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  setPage(){
    this.store.dispatch({ type: "SETPAGE", payload: {
      home: true,
      step1: true,
      step2: true,
      step3: false,
      summary: false
    } })
  }

  onSubmit() {
    this.userStore.setUserValue(this.model)
    this.router.navigate(['/step3'])
  }

  ngOnInit() {
    this.setPage()
  }
}
