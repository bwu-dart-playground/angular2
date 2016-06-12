- TODO
  - debug
    var ngRootEl = window.getAllAngularRootElements()[0];
    var rootNgProbe = window.ng.probe(ngRootEl);
    var appRef = rootNgProbe.inject(window.ng.probe.coreTokens.ApplicationRef);
    appRef.tick();

    var ngZone = rootNgProbe.inject(window.ng.probe.coreTokens.NgZone);
    ngZone.onEventDone.subscribe(function() { console.log('Angular did some work'); });

  - Observables
    - https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service
      - My SO answer http://stackoverflow.com/questions/34714462/updating-variable-changes-in-components-from-a-service-with-angular2
    - class that notifies about property changes
      - http://stackoverflow.com/questions/36267119/detect-change-of-nested-property-for-component-input/36267274#36267274
      - https://plnkr.co/edit/wnLWAW?p=preview (own)
    - Observable in service http://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2/35568924 (Mark)
      - monitor object change http://stackoverflow.com/questions/36267119/detect-change-of-nested-property-for-component-input/36267274#36267274
    - BehaviorSubject http://stackoverflow.com/questions/36372724/how-do-i-ensure-that-a-call-to-subscribe-on-the-observer-initially-receives-the
      - http://stackoverflow.com/questions/36408997/angular2-sending-data-from-a-component-to-a-component-via-service/36409287?noredirect=1#comment60442306_36409287
      - Use Service to communicate between components https://plnkr.co/edit/7sWWpF?p=preview (own)
    - rxjs5
      - docs http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-scan
      - https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
      - migration https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md
      - (rxjs4 https://github.com/Reactive-Extensions/RxJS)

    obs=new Subject().startWith(4);
    obs.subscribe();
    obs.next(3);
    //prints 4 3

    //not the same as
    obs=new BehaviourSubject(4);
    obs.subscribe(); //prints 4
    obs.next(3); //prints 3
    obs.subscribe(); //prints 3

  - Template
    - http://stackoverflow.com/questions/37225722/ng-content-select-bound-variable/37229495#37229495 ViewComponentRef.createEmbeddedView (own with Plunker uses context)
    - http://stackoverflow.com/questions/36730210/binding-events-when-using-a-ngfortemplate-in-angular-2 (with Plunker) (TemplateViewRef setLocal - is now context)

  - Forms
    - validation with optional controls http://stackoverflow.com/questions/35728850/angular-2-using-ngcontrol-with-optional-fields#36604958
    - form-level validator http://stackoverflow.com/questions/36399934/angular2-form-validation-on-conditionally-created-input-field
    - form.find() controls https://github.com/angular/angular/issues/5024
    - form test not getting valid (Gitter binarious)
    - use custom components as form inputs with `ngModel` (uses ControlValueAccessor)
      - trim for required http://stackoverflow.com/questions/37066442/model-values-not-trim-automatically-in-angular-2
      - https://github.com/angular/angular/issues/6639#issuecomment-174703547 (with example links)
      - https://github.com/angular/angular/issues/2543
      - http://stackoverflow.com/questions/34995938/ngmodel-custom-valuesaccessor
      - http://stackoverflow.com/questions/34948961/angular-2-custom-form-input
      - http://stackoverflow.com/questions/33981270/bind-angular-2-model-to-polymer-dropdown/33986250
      - http://www.bennadel.com/blog/3007-failure-using-ngmodel-with-a-custom-component-in-angular-2-beta-1.htm
      - http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel (ControlValueAccess + ngControl)
    - getcontrol group values of a component loaded using DCL
      - http://stackoverflow.com/questions/35008412/how-to-get-the-control-group-values-of-a-component-loaded-using-dcl-loadintoloca#35008527
    - dynamic properties http://stackoverflow.com/questions/34632603/dynamic-properties-on-ngformmodel#35227285 mit Plnkr from Thierry

    - select option dummy default option http://plnkr.co/edit/KAskl0BatO71juX97UrG?p=preview

  - Template Variables
    - add using BrowserDomAdapter
      - http://stackoverflow.com/questions/34987560/is-it-possible-to-add-a-local-template-variable-using-browserdomadapter

  - Using Pipes (Read)
    - https://egghead.io/lessons/angular-2-using-pipes-to-filter-data
    - filter pipe http://plnkr.co/edit/ienTN54PdS3bydfDgRGI?p=preview
    - filter pipe (own example) https://plnkr.co/edit/4Il8QMlh9UYQ4hyrnU3W?p=preview
      http://stackoverflow.com/questions/35571269/angular-2-searchtext
    - orderBy pipe http://embed.plnkr.co/DHLVc0 (see also https://github.com/angular/angular.io/issues/570#issuecomment-191036213)
    - pipe that returns a promise https://plnkr.co/edit/2LupLi?p=preview

  - async validator
    - http://plnkr.co/edit/vlzDapiOgVWLNqltEbGb?p=preview


- Resources
  - escardin/angular2-community-faq https://github.com/escardin/angular2-community-faq#any-good-tutorials-for-the-router
  - public Google Docs https://drive.google.com/drive/folders/0BxgtL8yFJbacQmpCc1NMV3d5dnM

- Change detection
    How can we inform angular that there are changes on the component (when using ON_PUSH)?

    Can we be running outside angular's zone and still do this?
    You can. Call `markForCheck` on a change detector ref, and then call LifeCycle.tick.

  - observables and onPush https://plnkr.co/edit/oUQW5DzrLdUUThIkxLGG?p=preview
  - onPush, markAsCheckOnce https://github.com/angular/angular/issues/4746#issuecomment-150754049


- DynamicComponentLoader
  - random order of multple added coponents https://github.com/angular/angular/issues/7854#issuecomment-203988888
  - ViewContainerRef.createComponent
    - example https://github.com/angular/angular/issues/3474#issuecomment-216748940
    - inject parent injector http://plnkr.co/edit/lxqPxFCa7gNlsRZfxI8E?p=preview, http://plnkr.co/edit/1zcoWhgTd2fkiKZNnKRI?p=info
    - appRef._loadComponent to enable change detection - is this really necessary?
      - http://plnkr.co/edit/8o9dAcOQ4LTYa4Oms5wE?p=preview
      - https://github.com/angular/angular/issues/6223#issuecomment-216456325
  - beta.17
    - loadNextToLocation https://plnkr.co/edit/CcKXhq?p=preview  http://stackoverflow.com/questions/35170985/how-to-call-an-event-in-parent-component-from-child-component-which-is-loaded-us
  - beta.16
    - add component to clicked item  with ViewChildren http://plnkr.co/edit/aRKZPJeGs7XC6gf1ukOj?p=preview
  - <= beta.15
      - wrapper element for DCL
        - https://plnkr.co/edit/ZksBln?p=preview (still using DynamicComponentLoader)
        - http://stackoverflow.com/questions/36325212/angular-2-dynamic-tabs-with-user-click-chosen-components/36325468#36325468
      - loadAsRoot with data binding http://plnkr.co/edit/yzKAiXQQQwKi88g6wIdY?p=preview (content seems not to match the description)
      - eigenes (set id) http://plnkr.co/edit/ihb7dzRlz1DO5piUvoXw?p=preview
      - simple loadNextToLocation example https://plnkr.co/edit/LwrrrEcn4rDqWs3bXu3K?p=preview
      - loadAsRoot workaround
        - https://github.com/angular/angular/issues/6223#issuecomment-195155190
        - https://github.com/angular/angular/issues/6370#issuecomment-193896657 (good example)
        - http://plnkr.co/edit/tcgbI2?p=preview  (https://github.com/angular/angular/issues/7453#issuecomment-193138577)
        - https://github.com/angular/angular/issues/6071#issuecomment-202765309 (register component with change detection)
      - load by name https://plnkr.co/edit/C0U5IIflrMnqxuXVbdw8?p=preview (https://github.com/angular/angular/issues/7652#issuecomment-198365577)

- custom validators
```
emailValidator(control: Control) {
        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return (re.test(control.value)) ? null : {message: language.signup.not_email};
}
```
  - https://github.com/angular/angular/blob/master/modules/angular2/src/common/forms/directives/validators.ts#L10
  - https://gist.github.com/qdouble/21cd8448d882c446aca1

- observe inputs
<input [ngControl]='cont'>
constructor(){
cont=new Control();
cont.subscribe(adjustwidth);

- parsers / formatters ng1 => value-accessors ng2
 https://groups.google.com/forum/#!topic/angular/dKVV_yXQ07s
 https://github.com/angular/angular/issues/6174#issuecomment-169556490

- Plunker example
  - TS template (public beta.17) https://plnkr.co/edit/wnLWAW?p (private) https://plnkr.co/edit/Z67Tlh?p=info
    - Router
      - (RC.1) https://plnkr.co/edit/cbEpkV7Ge7aT11CnjFuh?p=preview
      - (beta 17) https://plnkr.co/edit/6LyC8u?p=preview
      - (beta 15 https://plnkr.co/edit/VdJwsq?p=preview)
    (private) https://plnkr.co/edit/uRW34w?p=catalogue
    (old https://plnkr.co/edit/tpl:AvJOMERrnz94ekVua0u5)

  - RC.x
    - get route parameters http://stackoverflow.com/questions/37218706/angular-2-rc1-get-parameters-from-the-initial-url-used/37230716#37230716 (own)

  - ng-content (extending element) http://plnkr.co/edit/jS8JHmD0xibJ8UGOKlCC?p=preview
    (ng-content two levels) https://plnkr.co/edit/uRW34w?p=preview
  - form validation http://plnkr.co/edit/S8AUiDzuDDdaLpgxhbK6?p=preview
    http://plnkr.co/edit/riokbSny09yiV17400ip?p=preview
  - @Input() and `@HostBinding()` on the same field https://plnkr.co/edit/JyhQFJfSRLUwNYcENC2M?p=preview
  - Promise, map https://plnkr.co/edit/02OTUm?p=preview
  - Ionic http://plnkr.co/edit/TW20lftdc5s622pcJPkp?p=preview
  - Keyboard shortcuts: https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts
  - tree component (recursive) http://plnkr.co/edit/roxW5UmCzq7ch8xUGvbF?p=preview

- WebWorkers
  - https://github.com/angular/angular/blob/master/modules/angular2/docs/web_workers/web_workers.md
  - custom render service https://github.com/angular/angular/issues/2409


- Router
  - https://github.com/angular/angular/issues/8409#issuecomment-218323649
   > @ps2goat can you reproduce? You can only subscribe to the root router for updates, so if you injected the router in a child route, the subscribe wouldn't fire anything.
  - rc.1 Heroes Plunker example http://plnkr.co/edit/fKSnUzM4aLg1Q8ftkFAp?p=preview
  - rc.0 Heroes Plunker http://plnkr.co/edit/sjOPaA0azcANt8MGm3NG?p=preview
  - AltRouter example BrandonRoberts https://plnkr.co/edit/sTzoCO?p=preview
  - get RouteParams in AppComponent (root) http://stackoverflow.com/questions/36600082/how-to-access-routeparams-in-the-app-class-in-angular2
  - set active class http://stackoverflow.com/questions/34965853/in-angular-2-how-do-i-assign-a-custom-class-to-an-active-router-link/34965944#34965944
  - get all routes http://stackoverflow.com/questions/36419836/angular2-get-routings-map
  - load routes dynamically
    - http://stackoverflow.com/questions/36350906/dynamic-build-routes-or-dynamic-component-import-angular-2/36351148#36351148
    - http://stackoverflow.com/questions/35887063/dynamic-route-loading-in-angular-2-fails-beta/35889066#35889066

  - routerCanReuse https://github.com/angular/angular/issues/7784#issuecomment-202492405
  - Navigate to parent route (without activating child) http://stackoverflow.com/questions/36274134/angular2-default-route-view/36275487?noredirect=1#comment60179417_36275487 (own Plunker)
  - Get query parameters / redirect after login http://stackoverflow.com/questions/36160118/angular2-redirect-after-login
  - Child routes https://plnkr.co/edit/nt8Zzi?p=preview (zoechi)
  - check if route exists before re-adding it http://plnkr.co/edit/ya8M0spq5ayOvWAeOtYh?p=preview (eigner) http://stackoverflow.com/questions/36114571/configuration-name-conflicts-with-existing-route-name/36114986#36114986
  - navigate to root route http://stackoverflow.com/questions/35896308/angular-2-add-routerlink-in-child-which-points-to-root-router/35896818#35896818
  - regex http://plnkr.co/edit/mk8wPfoqS66Qsuu2yN4F?p=preview brandonroberts
  - https://github.com/brandonroberts/angular2-router-example/search?utf8=%E2%9C%93&q=modal
  - https://github.com/brandonroberts/angular2-router-example/blob/81a727d501b4f87e35611c572b864d3ca4a6834c/app/components/app/app.ts
  - route visited 2nd time elementRef different http://plnkr.co/edit/bevGpMAbviaugvNmoFso?p=preview
  - bunch of router examples from brandonroberts
    - https://plnkr.co/edit/Bim8OGO7oddxBaa26WzR?p=preview
  - child routes https://plnkr.co/edit/3dnBZEDhpGvVO5aQQswA?p=preview
  - CanActivate and DI https://github.com/angular/angular/issues/4112#issuecomment-153811572
    - http://plnkr.co/edit/Bim8OGO7oddxBaa26WzR?p=preview
    - http://plnkr.co/edit/SF8gsYN1SvmUbkosHjqQ?p=preview (brandonroberts)

  - Router Huge Flaw - Does not allow more than 1 level of nesting
    - http://plnkr.co/edit/ZM5sltrwn0HdATYjOzlD?p=preview brandonroberts issue #7063
    - http://plnkr.co/edit/yKEyfZz6Xf2l7rRtCXdY?p=preview
    - http://plnkr.co/edit/PzoKVgbZO0Xx6IE3grnG?p=preview
    - https://github.com/angular/angular/issues/6204#issuecomment-173146870
    - http://plnkr.co/edit/Bim8OGO7oddxBaa26WzR?p=preview
  - Async routes cause route data to be lost
    - https://github.com/angular/angular/issues/6272#issuecomment-173176154
    - https://plnkr.co/edit/N8YwjiBOnAGarRXtRJJO
    - http://plnkr.co/edit/Bim8OGO7oddxBaa26WzR?p=preview
    - http://stackoverflow.com/questions/36429843/async-load-routes-data-and-build-route-instruction-for-angular-2
  - Aux routes
    - http://plnkr.co/edit/5mp8pXsWuLt2yAIQgV3p?p=preview von brandonroberts
    - http://plnkr.co/edit/lquMdagaVfIoAT83w1pl?p=preview
    - https://github.com/angular/angular/issues/4945
    - http://stackoverflow.com/questions/33442363/is-angular-2-auxiliary-router-broken
    ```
    @RouteConfig([
        { path: "/dashboard", component: DashboardComponent, name: "Dashboard", useAsDefault: true },
        { path: "/login", component: LoginComponent, name: "Login” },
        { aux: “/chat", component: ChatComponent, name: “Chat” }
    ])
    ```
    The aux path matches the name of your secondary outlet
    `<router-outlet name=“chat”></router-outlet>`
    https://github.com/angular/angular/issues/4945

  - Top navigation example
    - http://plnkr.co/edit/N4OqwUEFFf1f54g3GQPh?p=preview (looks interesting, nice example)
  - Angular — Introduction to ngNewRouter vs ui-router (Read)
    - https://medium.com/angularjs-meetup-south-london/angular-just-another-introduction-to-ngnewrouter-vs-ui-router-72bfcb228017#.akvz1asr4
  - Wildcard in route: http://plnkr.co/edit/YLtfbHgmufFSqTJp6gju?p=info
  - get all router params also from parent routes https://github.com/angular/angular/issues/5330#issuecomment-188278642
  - get current route
    - https://github.com/angular/angular/issues/7122#issuecomment-185388662
    - https://github.com/angular/angular/issues/5335#issuecomment-170088933
  - Is current route active (Instruction alias) https://github.com/angular/angular/issues/7476 `router.isRouteActive(router.generate(['Parent', 'Child']))`

  - secure router-outlet  CaptainCodeman
    - http://www.captaincodeman.com/2016/03/31/angular2-route-security/
```
  import {Directive, Injector, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
  import {Router, RouteData, RouterOutlet, RouteParams, Instruction, ComponentInstruction} from 'angular2/router';

  /*
    Example implementation

    Given a route:
    @RouteConfig([
    { path: '/thing/:id', component: ThingComponent, name: 'Thing', data: { public: false, roles:['thinger'] } }
    ])

    authorize(instruction: ComponentInstruction):boolean {
      // simplest case - route is public
      if (<boolean>instruction.routeData.data['public']) {
        return true;
      }

      // if not public then we at least need an authenticated user
      if (this.isAuthenticated()) {
        var routeRoles = <any[]>instruction.routeData.data['roles'];
        var userRoles = <string[]>this.roles();

        // no roles required for route = user just needs to be authenticated
        var authorized = routeRoles.length === 0 || routeRoles.some(routeRole => userRoles.indexOf(routeRole) >= 0);

        return authorized;
      }

      return false;
    }
  */
  export abstract class IAuthService {
    abstract isAuthenticated():boolean;
    authorize(instruction: ComponentInstruction, params:any):boolean {
      // authorized if route allows public access or user is authenticated
      return this.isAuthenticated() || <boolean>instruction.routeData.data['public']
    }
  }

  @Directive({selector: 'secure-outlet'})
  export class SecureRouterOutlet extends RouterOutlet {
    signin:string;
    unauthorized:string;
    injector:Injector;

    private parentRouter: Router;
    private authService: IAuthService;

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
                _parentRouter: Router, @Attribute('name') nameAttr: string,
                authService:IAuthService,
                injector:Injector,
                @Attribute('signin') signinAttr: string,
                @Attribute('unauthorized') unauthorizedAttr: string) {
      super(_elementRef, _loader, _parentRouter, nameAttr);
      this.parentRouter = _parentRouter;
      this.authService = authService;
      this.injector = injector;
      this.signin = signinAttr;
      this.unauthorized = unauthorizedAttr;
    }

    activate(nextInstruction: ComponentInstruction): Promise<any> {
      var params = this.getAllRouteParams(this.injector);
      var isAuthorized = this.authService.authorize(nextInstruction, params);

      if (isAuthorized) {
        return super.activate(nextInstruction);
      }

      if (this.authService.isAuthenticated()) {
        var ins = this.parentRouter.generate([this.unauthorized]);
        return super.activate(ins.component);
      } else {
        var ins = this.parentRouter.generate([this.signin,{url:location.pathname}]);
        return super.activate(ins.component);
      }
    }

    reuse(nextInstruction: ComponentInstruction): Promise<any> {
      return super.reuse(nextInstruction);
    }

    getAllRouteParams(injector) {
      let params = null;
      while(injector) {
        const routeParams = injector.getOptional(RouteParams);
        if (routeParams) {
          if (params === null) {
            params = {};
          } else {
            params = Object.create(params);
          }

          Object.assign(params, routeParams.params);
        }
        injector = injector.parent;
      }
      return params;
    }
  }
  ```


- forms
  - providing (async) validators globally https://github.com/angular/angular/issues/8022#issuecomment-211299100
    see also https://github.com/angular/angular/issues/8118
  - uppercase directive https://plnkr.co/edit/MzVOCK?p=preview (eigener)
  - different ways of building a form http://stackoverflow.com/questions/35383765/angular2-forms-validations-ngcontrol-ngmodel-etc
  - Model-driven forms using ControlGroup http://plnkr.co/edit/UClEl7ly2LRjYRf7MvY6?p=info
    http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
  - valueaccessor
    - http://stackoverflow.com/questions/31879497/angular2-radio-button-binding
    - https://github.com/angular/angular/issues/2543 (eigenes funktionierendes Beispiel)
    - http://plnkr.co/edit/slVMz6Kgv6KlnUNMDe3o?p=preview
    - see also https://github.com/angular/angular/issues/2543  (https://plnkr.co/edit/Bz7wLC5qq7s6Fph1UwpC?p=preview)

  - radio buttons http://plnkr.co/edit/B1WPUs36Gkq0ipI8Bvsi?p=preview (custom value accessor for radio)
  - https://plnkr.co/edit/988PSJKXCfrUXfLOGgyg?p=preview (http://stackoverflow.com/questions/35653175/how-to-bind-to-radio-buttons-in-angular2-beta-6)
  - validator for depending fields (password repeat) http://plnkr.co/edit/NqQhBPJJo1PzHfisvh9J?p=preview  (@escardin)

  - multiple validators
  @weizlini email: ["", Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(40), Utilities.emailValidator ])],
  /////
  this.form = fb.group({
              email: ["", Validators.compose([
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(40),
                  Utilities.emailValidator
              ])],
              password: ["", Validators.compose([
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(20)
              ])]
          });
  //////
  you can also implement the Validator interface from angular2/core (and decorate it with @Directive) and use it directly on the template
  /// https://plnkr.co/edit/5yO4HviXD7xIgMQQ8WKs?p=preview

  - number validator example with different ways to access to valid state https://plnkr.co/edit/As15rN9GfgkoprVQ1rOq?p=preview
- custom injectable annotation
```
- angular2:
    custom_annotations:
      - name: MyInjectable
        import: 'package:mathedit/providers/injectable.dart'
        superClass: Injectable
```

- transformers
  - https://github.com/angular/angular/wiki/Angular-2-Dart-Transformer
  - https://github.com/angular/angular/issues/8189#issuecomment-215967614
  ```
    transformers:
    - angular2: ...
        resolved_identifiers:
            BrowserClient: 'package:http/browser_client.dart'
  ```

- view compiler
  - Angular 2.0: Life of a Template https://docs.google.com/document/d/19_9pshmkAQOA67UWTm41bzWbvikwerVjnCD97D0JS7g/edit
  - viewContainer createEmbeddedView (https://github.com/angular/angular/issues/7443)
    - http://plnkr.co/edit/LK1Aa3vhawd2sMl0Wj6F
    - http://plnkr.co/edit/GNYqQROgM7DQ4ly9G8Xz?p=preview (tabs from https://github.com/angular/angular/issues/6310)
  - http://plnkr.co/edit/fwd1kh9TXfemagpuDnLZ?p=preview (TemplateRef, ViewContainerRef)

- unittest
  - Plunker RC.1 http://embed.plnkr.co/OCqLH555fmTzxAn0F0zy/
  - async
    - PR https://github.com/angular/angular/pull/7735#issuecomment-206424852
    - Jasmine `done` https://github.com/angular/angular/pull/8159#issuecomment-212919107
  - routing
    - http://stackoverflow.com/questions/34658526/trouble-unit-testing-service-with-the-router-injected-in-the-constructor-in-angu
    - http://stackoverflow.com/questions/35011972/component-undefined-has-no-route-config-aka-how-to-configure-angular-2-router-fo
    - since beta.2
    ```
    // Somewhere in the test setup
    import {setBaseTestProviders} from 'angular2/testing';
    import {
      TEST_BROWSER_PLATFORM_PROVIDERS,
      TEST_BROWSER_APPLICATION_PROVIDERS
    } from 'angular2/platform/testing/browser';
    setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                         TEST_BROWSER_APPLICATION_PROVIDERS);
    ```
    - test eventemitter http://stackoverflow.com/questions/35319476/any-way-to-test-eventemitter-in-angular2
    - test http https://github.com/angular/http/issues/58
       https://github.com/angular/angular/issues/5570#issuecomment-189852510
    - TestComponentBuilder get reference to the element (2 ways same effect)
      ```
      fixture.detectChanges();
      // get a copy of our miniDOM
      let compiled = fixture.elementRef.nativeElement;
      // get a reference tot he component(controller)
      let component = fixture.debugElement.componentInstance;
      ```

- Polymer
  - http://plnkr.co/edit/1Gx2G2utKwgnNFvf0I8c?p=preview bind to selected of `<paper-lightbox>`
  - http://stackoverflow.com/questions/33981270/bind-angular-2-model-to-polymer-dropdown/33986250 `<paper-dropdown-menu>`
  http://stackoverflow.com/questions/37202543/ngmodel-binding-on-polymer-dropdown-angular2/37202613#37202613 `<paper-dropdown-menu>`
  - http://plnkr.co/edit/kMuyWiNfDwrLSSc3JGDx?p=preview (selbst zusammengebastelt)
  - paper-input https://github.com/angular/angular/issues/5360,
    http://stackoverflow.com/questions/35867952/how-to-use-angular2-ngmodel-for-polymer-paper-input-error-no-value-accessor-fo
  - http://stackoverflow.com/questions/35356888/polymer-paper-menu-with-angular2 `<paper-menu>`, `<paper-dropdown-menu>`

  - Angular Polymer posts
    - http://stackoverflow.com/questions/37192424/styling-polymer-element-in-angular2/37193613#37193613
    - http://stackoverflow.com/questions/34779175/polymer-elements-within-angular-2-component/34782260#34782260
    - http://stackoverflow.com/questions/37490068/how-to-use-css-mixins-with-angular-2-dart-and-polymer/37495705#37495705
    - http://stackoverflow.com/questions/36864501/using-paper-datatable-in-angular2/36864636#36864636


- client-server-communication
  - HTTP interceptors https://github.com/angular/angular/issues/2684
  - https://github.com/angular/http/issues/80

- Animation
  - Using Animation and AnimationBuilder https://plnkr.co/edit/f9X2UfWdExhCh6oAX9hc?p=preview
  - Simple keyframes, ngFor http://plnkr.co/edit/SXzyyN?p=preview http://stackoverflow.com/questions/37217314/how-can-i-animate-ngfor-in-angular-2/37217476#37217476
  - page transition animation http://plnkr.co/edit/FikHIEPONMYhr6COD9Ou?p=info
    http://stackoverflow.com/questions/33553828/page-transition-animations-with-angular-2-0-router-and-component-interface-promi
  - hide spinner on load http://stackoverflow.com/questions/36234211/how-to-set-animation-on-first-element-on-loading
  - slide-in navigation with *ngIf http://stackoverflow.com/questions/36417931/angular-2-ngif-and-css-transition-animation/36417971?noredirect=1#comment60456233_36417971

- Project setup
  - cannot find Promise
  - Internet Explorer
    - https://github.com/angular/angular/issues/6391, https://github.com/angular/angular/issues/7144#issuecomment-190012839

- Aria roles https://github.com/angular/angular/issues/754

- Dart Transformers
  - https://github.com/angular/angular/wiki/Advanced-Transformer-Configuration
  - https://github.com/angular/angular/pull/7464/files
```
  # from https://github.com/kegluneq/angular/blob/use_split_transformers/modules/playground/pubspec.yaml
  transformers:
  - angular2/transform/codegen:
      platform_directives: 'package:angular2/src/common/directives.dart#CORE_DIRECTIVES'
  - angular2/transform/reflection_remover:
      $include:
          - web/src/animate/index.dart
          - web/src/async/index.dart

  - angular2/transform/deferred_rewriter:
      # No playground apps use deferred imports, but in general
      # all libraries with deferred imports should be included.
      $include: []

  - $dart2js:
      $include:
          - web/src/**
      $exclude:
          # web worker code compiled separately; see below
          - web/src/web_workers/**
      minify: false
      commandLineOptions:
          - --show-package-warnings
          - --trust-type-annotations
          - --trust-primitives
          - --enable-experimental-mirrors
```

  - Service
    - Http
      - ensure only one request http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
      - HTTP Request
        - Get the current base URL http://stackoverflow.com/questions/36222845/how-to-get-domain-name-for-service-in-angular2
        - get cached data http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in

  - Authentication
    - http://stackoverflow.com/questions/34331478/angular2-redirect-to-login-page

- TypeScript setup
  - loading polyfills https://github.com/angular/angular/issues/4809#issuecomment-209508295

- FAQ
  - overlay / modal see https://github.com/angular/angular/issues/8941#issuecomment-223029063
  - sanitizer http://stackoverflow.com/questions/37076867/in-rc-1-some-styles-cant-be-added-using-binding-syntax/37233523#37233523
  - RC.1 router not working without routerLink http://stackoverflow.com/questions/37310539/angular-2-rc1-router-doesnt-work-without-any-routerlink
  - angular2 modal source https://github.com/shlomiassaf/angular2-modal/blob/master/src/angular2-modal/providers/Modal.ts#L46
    - Bootstrap CSS modal http://stackoverflow.com/questions/36566698/cant-initialize-dynamically-appended-component-in-angular-2/36566919?noredirect=1#comment60736661_36566919
  - bootstrap 2 components with a shared service http://stackoverflow.com/questions/36566698/cant-initialize-dynamically-appended-component-in-angular-2/36566919?noredirect=1#comment60736661_36566919 (with own Plunker)

  - CORS http://stackoverflow.com/questions/10143093/origin-is-not-allowed-by-access-control-allow-origin
    - CORS test URL https://cors-test.appspot.com/test
  - ngClass http://stackoverflow.com/a/33713824/217408
  - add ROUTER_DIRECTIVES to PLATFORM_DIRECTIVES
    `provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})`
  - other directives
    https://angular.io/docs/ts/latest/api/core/PLATFORM_DIRECTIVES-let.html
    `bootstrap(MyComponent, [provide(PLATFORM_DIRECTIVES, {useValue: [OtherDirective], multi:true})]);`
  - add pipes to PLATFORM_PIPES
    `bootstrap(App, [provide(PLATFORM_PIPES, {useValue: RainbowizePipe, multi:true})]);`
  - GitHub issues are for bug reports and feature requests.
    For support questions please use other channels like the ones listed in [CONTRIBUTING - Got a Question or Problem?](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#question)

    There is a nice new GitHub feature to "add reaction"s instead of `+1` posts. Please use this instead :+1:
    +1 was deprecated in favor of "add reaction" please migrate to the new feature as soon as possible!

  - escardin community FAQ
    - https://github.com/escardin/angular2-community-faq#what-are-observables-and-where-can-i-learn-more-about-them-and-rx
  - unsubscribe stream subscriptions
    - https://github.com/angular/angular/pull/6686/files
  - prevent rendering until async data is available
    - https://github.com/angular/angular/issues/6674#issuecomment-174699245
  - map(), filter() are missing from Observable
    // maybe update question about `first()` not being available
    - http://stackoverflow.com/questions/34394708/in-angular-2-0-0-beta-0-map-and-filter-are-missing-from-a-form-inputs-obser
    - http://stackoverflow.com/questions/34855992/observable-map-function-not-running-angular2-http
  - communicate between siblings
    - https://github.com/escardin/angular2-community-faq/blob/master/services.md#how-do-i-communicate-between-components-using-a-shared-service
    - http://stackoverflow.com/questions/34700438/global-events-in-angular-2
    - eigner Plnkr https://plnkr.co/edit/o88z1FFYcZsNebbcGBsF?p=preview
  - pushstate 404
    - http://stackoverflow.com/questions/35137573/angular-2-router-es5-doesnt-work-on-page-reload/35137712#35137712 (own)
    - http://stackoverflow.com/questions/31415052/angular-2-0-router-not-working-on-reloading-the-browser (main)
    - http://stackoverflow.com/questions/35077977/angular2-when-refresh-the-page-url-remains-same-but-appropriate-view-doesnt-g  (duplicated)
    - http://stackoverflow.com/questions/34415725/when-i-refresh-my-website-i-get-a-404-this-is-with-angular2-and-firebase/34416946#34416946 (firebase)
    - http://stackoverflow.com/questions/34703343/pathlocationstrategy-vs-hashlocationstrategy-in-web-apps/34703613#34703613 (duplication requested)
    - http://stackoverflow.com/questions/34541532/is-angular-2s-router-broken-when-using-html5-routes/34543822#34543822 (duplicated)
    - http://stackoverflow.com/questions/35052663/routing-aeednd-navigation-in-angular-2/35057576#35057576 (duplication requested)
    That's a browser feature.
    Angular by default uses HTML5 pushstate (PathLocationStrategy in Angular slang).
    You either need a server that processes all requests like it were requesting `index.html` or you switch to `HashLocationStrategy` (with # in the URL for routes)
    https://angular.io/docs/js/latest/api/router/HashLocationStrategy-class.html
    See also https://ngmilk.rocks/2015/03/09/angularjs-html5-mode-or-pretty-urls-on-apache-using-htaccess/
    - Dart
      - https://github.com/adaojunior/pub_serve_rewrites
    - DI config setting http://stackoverflow.com/questions/35215112/pass-page-global-variables-into-angular2-app-for-use-with-services/35217704#35217704
  - ngFor trackBy
    - https://github.com/angular/angular/issues/6907#issuecomment-182359285
    - http://www.bennadel.com/blog/3020-understanding-object-identity-with-ngfor-loops-in-angular-2-beta-3.htm
  - ES6 DI Dependency Injection http://stackoverflow.com/questions/33034930/how-to-use-angular2-dynamiccomponentloader-in-es6
  - status of multiple checkboxes http://plnkr.co/edit/N9NXBYcwhon6ITr8RP5y?p=preview
    http://stackoverflow.com/questions/35592529/why-did-deleting-my-web-assets-folder-also-delete-all-source-in-lib/35598277?noredirect=1#comment58922781_35598277
    similar with buttons http://plnkr.co/edit/bhHbSd5ReCxtxRNI9ogx?p=preview
  - dynamic templates https://github.com/angular/angular/issues/7596#issuecomment-196881527
   - http://stackoverflow.com/questions/36008476/how-to-realize-website-with-hundreds-of-pages-in-angular2
  - Google doesn't provide timelines. As you know it's hard to make estimates for software project.
     You can follow https://docs.google.com/document/d/150lerb1LmNLuau_a_EznPV1I1UHMTbEl61t4hZ7ZpS0/edit to see what next steps are planned.
     See also https://github.com/escardin/angular2-community-faq
  - ngFor with JSON
  - @ViewChildren, @ContentChildren, @ViewChild
     - http://stackoverflow.com/questions/32693061/angular-2-typescript-get-hold-of-an-element-in-the-template/35209681#35209681
    - http://plnkr.co/edit/5kJfvIjnC1ROKuXPKNKX?p=preview (own) simple
    - http://plnkr.co/edit/h8aT7cPuW2PCWBqUzlth?p=preview (own) more variations
    - http://stackoverflow.com/questions/36329658/angular-2-select-object-from-the-dom-and-set-the-focus/36329983#36329990 (own Plunker) find by element attribute
    -  take directive super-type into account when querying - https://github.com/angular/angular/issues/8580

  - Http Interceptors http://stackoverflow.com/questions/36261100/what-is-angular-2-analogue-solution-for-angular-1-interceptors
  - load JavaScript dynamically in component http://stackoverflow.com/questions/34489916/load-external-js-script-dynamically-in-angular-2
  - call Angular from outside http://stackoverflow.com/questions/36997625/angular-2-communication-of-typescript-functions-with-external-js-libraries/36997723#36997723
  - component packages http://akveo.com/ng2-admin/#/pages/dashboard
  - load config before bootstrap
    - http://stackoverflow.com/questions/37611549/how-to-pass-parameters-rendered-from-backend-to-angular2-bootstrap-method/37611677#37611677
    - https://github.com/angular/angular/issues/9047#issuecomment-224075188 (CaptainCodeman)
  - tree recursive http://stackoverflow.com/questions/37734077/passing-variables-into-template-from-function/37734875?noredirect=1#comment62964046_37734875

In the root component you can inject the router and subscribe to route events, then get the params from the router like

    export class AppComponent {
      constructor(private router:Router) {
        router.subscribe(route => {
          console.debug(this.router.currentInstruction.component.params);
        });
      }
    }

On components added by the router you can inject `RouteParams` like and access the values like

    export class Other{
        constructor(private routeParams: RouteParams) {
        console.debug(this.routeParams);
        console.log(this.routeParams.get('filter_industry'));
        console.log(this.routeParams.get('filter_start_with'));
      }
    }

[**Plunker example**](https://plnkr.co/edit/0mlrcA?p=preview)


Multiselect Plunker eigenes experiment https://plnkr.co/edit/tKxPE1


