//our root app component
import {HostBinding, Directive, Component, Directive, Input} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router, Instruction} from 'angular2/router';

@Component({
  template: "<h2>#2</h2>"
})


export class Some2 {}
@Component({
  template: "<h2>#1</h2>"
})
export class Some {}


@Directive({
  selector: '[routerLink]'
})
export class RouterLinkReplaceClass {

  //@Input('class.router-link-active')
  // myActiveClass: boolean = false;
  private _navigationInstruction: Instruction;
  @Input('routerLink')
  private _routeParams: any[];

  constructor(private _router: Router) {
    // we need to update the link whenever a route changes to account for aux routes
    this._router.subscribe((_) => this._updateLink());
  }

  private _updateLink(): void {
    this._navigationInstruction = this._router.generate(this._routeParams);
  }

  @HostBinding('class.my-active')
  get isRouteActive(): boolean {
    return this._navigationInstruction ? this._router.isRouteActive(this._navigationInstruction) : null;
  }
}


@RouteConfig([
   { path: '/1', component: Some, name: 'Some-1', useAsDefault: true },
   { path: '/2', component: Some2, name: 'Some-2' }
])
@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, RouterLinkReplaceClass],
  styles: [
    ':host a.my-active, :host a.my-active { border: solid 3px red; }',
    ':host a.router-link-active, :host a.router-link-active:visited { background-color: green; }'
    ],
  template:`
    <h1>Selecting one of two routes</h1>
    <p><a [routerLink]="['Some-1']">First route</a></p>
    <p><a [routerLink]="['Some-2']">Second route</a></p>
    <router-outlet></router-outlet>
  `,
})
export class App { }
