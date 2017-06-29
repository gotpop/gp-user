import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  constructor(private userStore: UserService, private router: Router) { }

  genders = ['Male', 'Female'];
  status = this.userStore.getStatusValue()
  model = this.userStore.getUserValue()

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  onSubmit() {

    this.status.step1 = true

    this.userStore.setUserValue(this.model)
    this.userStore.setStatusValue(this.status)

    console.log('Get user value: ', this.userStore.getUserValue())
    console.log('Get status value: ', this.userStore.getStatusValue())

    this.router.navigate(['/step2']);

  }

  ngOnInit() {
    if (this.status === undefined) {
      this.status = this.userStore.makeStatusModel()
      this.model = this.userStore.makeUserModel()
    }
  }

}
