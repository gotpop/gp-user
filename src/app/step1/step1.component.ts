import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  get diagnostic() { return JSON.stringify(this.model); }


  constructor(private userStore: UserService) { }

  model = this.userStore.makeModel()

  onSubmit() {
    this.submitted = true;
    this.userStore.setValue(this.model)
    let checkit = this.userStore.getValue()
    console.log(checkit)
  }

  ngOnInit() {
  }

}
