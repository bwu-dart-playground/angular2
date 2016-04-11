//our root app component
import {EventEmitter, HostListener, Component, Directive, Output} from 'angular2/core'
// import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
//import 'rxjs/Rx';


@Directive({
  selector: '[track-scroll]',
  // host: {'(window:scroll)': 'track($event)'},
})
export class TrackScrollDirective {
  @Output() pageYPositionChange:EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('TrackScrollDirective');
  }

  @HostListener('window:scroll', ['$event'])
  track(event:any) {
    this.pageYPositionChange.emit(document.body.scrollTop);
  }
}


@Component({
  selector: 'app-header',
//  moduleId: module.id,
  template: `xxx
  <div class="container-fluid" track-scroll (pageYPositionChange)="onPageYChange($event)">
      <div class="row">
          <div class="col-md-12">
              <app-header></app-header>
              <secure-outlet signin="Login" unauthorized="AccessDenied"></secure-outlet>
          </div>
      </div>
  </div>
  `,
  directives: [TrackScrollDirective]
})
export class AppHeader {
  public isCollapsed:boolean = false;

  pageY:number = 0;

  constructor(/*public authService:AuthenticationService*/) {
    console.log('AppHeader');
  }

  onPageYChange(pageY:number) {
    this.pageY = pageY;
    console.debug("PageY Pos ", pageY);
  }
}


@Component({
  selector: 'my-app',
  directives: [AppHeader],
  template: `
  <h2>Hello</h2>
  <app-header></app-header>
  <div style="height: 200vh; border: 5px solid red;"></div>
`
})
export class App {
}
