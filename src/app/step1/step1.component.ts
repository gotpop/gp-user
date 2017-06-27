import { Component, OnInit } from '@angular/core';
import { Hero }    from '../shared/hero';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styles: []
})

export class Step1Component implements OnInit {


    powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }



  constructor() { }

  ngOnInit() {
  }

}
