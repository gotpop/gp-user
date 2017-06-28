import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private userStore: UserService) { }

  status = this.userStore.makeStatusModel()
  model = this.userStore.makeUserModel()



  onSubmit() {

    this.status.step1 = true
    
    this.userStore.setUserValue(this.model)
    this.userStore.setStatusValue(this.status)

    console.log('Get user value: ', this.userStore.getUserValue())
    console.log('Get status value: ', this.userStore.getStatusValue())

  }

  ngOnInit() {
  }

}
