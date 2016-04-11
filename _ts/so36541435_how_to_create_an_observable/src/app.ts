// https://plnkr.co/edit/wnLWAW?p

//our root app component
import {Component} from 'angular2/core';
// import {Observable} from 'rxjs/Observable';
import {Todo} from '../../../web_workers/todo/services/TodoStore';
import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
//import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  directives: [],
  template: `
  <h2>Hello</h2>
`
})
export class App {
  public todos$: Observable<Todo[]>;
}
