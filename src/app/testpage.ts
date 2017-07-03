import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { GETPAGE, SETPAGE } from './store/page';
import { Observable, Observer } from 'rxjs/Rx';


@Component({
	selector: 'app-test-page',
	template: `
		<section class="section">
      <div class="container">
       <h1 class="title">This is a test page</h1>
        <button class="button is-warning is-large" (click)="getPage()">Increment</button>
        <div>{{ page.greet }}</div>
        <div>{{ page.home }}</div>
        <div>{{ page.step1 }}</div>
        <div>{{ page.step2 }}</div>
        <div>{{ page.step3 }}</div>
        <div>{{ page.summary }}</div>
        <button class="button is-warning is-large" (click)="setPage()">Decrement</button>

      </div>
    </section>
	`
})
export class MyPageComponent {

  public page

	constructor(private store: Store<any>){
		store.select('page').subscribe(page => {
      this.page = page
    })
	}

	getPage(){
		this.store.dispatch({ type: GETPAGE });
	}

	setPage(){
		this.store.dispatch({ type: "SETPAGE", payload: {
      home: true,
      step1: true,
      step2: false,
      step3: false,
      summary: false
    } });
	}

}
