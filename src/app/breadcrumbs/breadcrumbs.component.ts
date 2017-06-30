import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private userStore: UserService) { }

  status:object

  ngOnInit() {
    this.status = this.userStore.getStatusValue()
    this.status = {
      hello: 'goodbye'
    }
    console.log('status: ', this.userStore.getStatusValue())
  }

}
