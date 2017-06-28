import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  constructor(private userStore: UserService) { }

  serverStore = this.userStore.getServerValue()

  ngOnInit() {
    console.log('Ma server store', this.serverStore)
  }

}
