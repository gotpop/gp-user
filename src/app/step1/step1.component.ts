import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

@Component({
  selector: '[app-step1]',
  templateUrl: './step1.component.html'
})

export class Step1Component implements OnInit {

  constructor(private userStore: UserService, private router: Router) { }

  genders = ['Male', 'Female'];
  status
  model = this.userStore.getUserValue()

  onSubmit() {
    this.userStore.setUserValue(this.model)


    // let newObject = {home: true, step1: true, step2: false, step3: false, summary: false}
    //
    // this.userStore.setStatusValue(newObject)

    // this.userStore.setStatusValue(this.status)
    //
    //
    // console.log('ma status:', this.status)
    //
    // console.log('Get status value: ', this.userStore.getStatusValue()  )

    this.router.navigate(['/step2']);

  }

  ngOnInit() {



    if (this.status === undefined) {
      // this.status = this.userStore.makeStatusModel()


      this.model = this.userStore.makeUserModel()
    }

    // console.log('ma status2:', this.status)
    // this.status.step1 = true
    this.status = this.userStore.getStatusValue()
        // console.log('ma status3:', this.status)

  }

}
