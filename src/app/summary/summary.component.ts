import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, Observer } from 'rxjs/Rx'
import { UserService } from '../shared/user.service'
import { GETPAGE, SETPAGE } from '../store/page'
import { fadeInAnimation } from '../animations/fade'

@Component({
  selector: '[app-summary]',
  templateUrl: './summary.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SummaryComponent implements OnInit {

  public serverStore
  public page
  publicmodel = this.userStore.getUserValue()

  constructor(private userStore: UserService, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  setPage(){
    this.store.dispatch({ type: "SETPAGE", payload: {
      home: true,
      step1: true,
      step2: true,
      step3: true,
      summary: true
    } })
  }

  ngOnInit() {
    this.setPage()
    this.serverStore = this.userStore.getServerValue()
    console.log('Get server value: ', this.serverStore)
  }

}
