import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Observer } from 'rxjs/Rx'
import { UserService } from '../shared/user.service'
import { GETPAGE, SETPAGE } from '../store/page'
import { fadeInAnimation } from '../animations/fade'

@Component({
  selector: '[app-step3]',
  templateUrl: './step3.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class Step3Component implements OnInit {

  public page
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
        step2: true,
        step3: true,
        summary: false
      }
    })
  }

  makePost() {
    let sendObject = JSON.stringify(this.model)
    fetch("api/user", {
      method: "POST",
      body: sendObject
    }).then(doThis.bind(this))

    function doThis(response) {
      return response.text().then(thenThis.bind(this))
    }

    function thenThis(text) {
      let parseString = JSON.parse(text)
      console.log('Object from server: ', parseString)
      this.userStore.setServerValue(parseString)
      this.router.navigate(['/summary'])
    }

    console.log("Posted to Express endpoint!")
  }

  onSubmit() {
    this.userStore.setUserValue(this.model)
    this.makePost()
  }

  ngOnInit() {
    this.setPage()
  }

}
