import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {

  constructor(private userStore: UserService, private router: Router) { }

  status = this.userStore.getStatusValue()
  model = this.userStore.getUserValue()


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

      // this.serverUserObject.address1 = parseString.address1
      // this.serverUserObject.address2 = parseString.address2
      // this.serverUserObject.email = parseString.email
      // this.serverUserObject.list = parseString.list
      // this.serverUserObject.name = parseString.name
      // this.serverUserObject.postcode = parseString.postcode
      // this.serverUserObject.surname = parseString.surname
    }

    console.log("Posted!")
  }

  onSubmit() {
    this.status.step3 = true

    this.userStore.setUserValue(this.model)
    this.userStore.setStatusValue(this.status)

    console.log('Get user value: ', this.userStore.getUserValue())
    console.log('Get status value: ', this.userStore.getStatusValue())

    this.makePost()

    this.router.navigate(['/summary']);
  }

  ngOnInit() {
  }

}
