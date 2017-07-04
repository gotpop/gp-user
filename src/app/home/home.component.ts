import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { GETPAGE, SETPAGE } from '../store/page'
import { UserService } from '../shared/user.service'
import { fadeInAnimation } from '../animations/fade'

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class HomeComponent implements OnInit {

  public title = 'GotPop User'
  public model
  public page

  constructor(private userStore: UserService, private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  ngOnInit() {

  }

}
