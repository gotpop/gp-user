import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { GETPAGE, SETPAGE } from './store/page';
import { Observable, Observer } from 'rxjs/Rx';

interface AppState {
  page: number;
}

@Component({
	selector: 'app-test-page',
	template: `
		<section class="section">
      <div class="container">
       <h1 class="title">This is a test page</h1>
        <button class="button is-warning is-large" (click)="getPage()">Increment</button>
        <div>Current Count: {{ page | async }}</div>
        <button class="button is-warning is-large" (click)="setPage()">Decrement</button>

      </div>
    </section>
	`
})
export class MyPageComponent {
	page: Observable<number>;

	constructor(private store: Store<AppState>){
		this.page = store.select('page');
	}

	getPage(){
		this.store.dispatch({ type: GETPAGE });
	}

	setPage(){
		this.store.dispatch({ type: SETPAGE });
	}

}
