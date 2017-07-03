import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'


@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'GotPop User';

  constructor(private userStore: UserService) { }

  status = this.userStore.getStatusValue()

  ngOnInit() {
    if (this.status === undefined) {
      this.status = this.userStore.makeStatusModel()
      console.log('Home status: ', this.status)
      this.status = this.userStore.getStatusValue()
      console.log('Home status: ', this.status)
    }
  }

}
