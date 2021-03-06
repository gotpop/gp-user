import { Component, OnInit } from '@angular/core'
import { Observable, Observer } from 'rxjs/Rx'
import { Store } from '@ngrx/store'
import { GETPAGE, SETPAGE } from '../store/page'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public page

  constructor(private store: Store<any>) {
    store.select('page').subscribe(page => {
      this.page = page
    })
  }

  getPage() {
    this.store.dispatch({ type: GETPAGE })
  }

  ngOnInit() {

  }

}
