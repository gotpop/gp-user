import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {

  constructor(private userStore: UserService) { }

  status = this.userStore.getStatusValue()
  model = this.userStore.getUserValue()

  onSubmit() {
    this.status.step3 = true

    this.userStore.setUserValue(this.model)
    this.userStore.setStatusValue(this.status)

    console.log('Get user value: ', this.userStore.getUserValue())
    console.log('Get status value: ', this.userStore.getStatusValue())
  }

  ngOnInit() {
  }

}
