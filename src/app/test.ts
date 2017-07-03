import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './store/counter';
import { Observable, Observer } from 'rxjs/Rx';

interface AppState {
  counter: number;
}

@Component({
	selector: 'app-test',
	template: `
		<section class="section">
      <div class="container">
        <button class="button is-info is-large" (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button class="button is-info is-large" (click)="decrement()">Decrement</button>

        <button class="button is-info is-large" (click)="reset()">Reset Counter</button>
      </div>
    </section>
	`
})
export class MyAppComponent {
	counter: Observable<number>;

	constructor(private store: Store<AppState>){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
