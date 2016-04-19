//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {App} from './app';
import {ROUTER_PROVIDERS} from 'angular2/router'

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(App, [ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})])
  .catch(err => console.error(err));
