import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'GotPop User';
  collectables = []
  constructor(private CollectableService:CollectableService) { }

  ngOnInit() {
    this.collectables = this.CollectableService.getCollectables();
  }

}
