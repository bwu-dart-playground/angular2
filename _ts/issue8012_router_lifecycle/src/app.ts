// https://plnkr.co/edit/wnLWAW?p

//our root app component
import {EventEmitter, HostListener, Component, Directive, Output} from 'angular2/core'
// import {Observable} from 'rxjs/Observable';
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
}
