import { DecrementCounter } from './../state/app.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Detail } from '../models/detail';
import { IncrementCounter } from '../state/app.actions';

@Component({
  selector: 'cc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  total = 0;
  allDetails: Detail[];

  constructor(
    private store: Store<any>
  ) {

  }

  ngOnInit() {
    this.store.pipe(
      select('appState')
    ).subscribe(data => {
      this.total = data.count
      this.allDetails = data.details;

      console.log('data', data);
    });
  }

  increment() {
    // this.store.dispatch({type: 'INCREMENT', payload: 1});
    this.store.dispatch(new IncrementCounter(1));
  }

  decrement() {
    // this.store.dispatch({type: 'DECREMENT', payload: 1});
    this.store.dispatch(new DecrementCounter(1));
  }

}
