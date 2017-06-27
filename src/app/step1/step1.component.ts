import { Component, OnInit } from '@angular/core';
import { User }    from '../shared/user.model';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styles: []
})

export class Step1Component implements OnInit {


    powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];

    model = new User('Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {
      this.submitted = true;
      console.log('Nuts!');
      console.log(this.model)
    }



    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }



  constructor() { }

  ngOnInit() {
  }

}
