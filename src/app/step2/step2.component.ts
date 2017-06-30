import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

@Component({
  selector: '[app-step2]',
  templateUrl: './step2.component.html'
})
export class Step2Component implements OnInit {

  constructor(private userStore: UserService, private router: Router) { }

  status = this.userStore.getStatusValue()
  model = this.userStore.getUserValue()

  onSubmit() {
    // this.status.step2 = true

    this.userStore.setUserValue(this.model)
    this.userStore.setStatusValue(this.status)

    console.log('Get user value: ', this.userStore.getUserValue())
    console.log('Get status value: ', this.userStore.getStatusValue())

    this.router.navigate(['/step3']);
  }

  ngOnInit() {
  }
}
