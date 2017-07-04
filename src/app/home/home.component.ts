import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { GETPAGE, SETPAGE } from '../store/page'
import { UserService } from '../shared/user.service'

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html'
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
