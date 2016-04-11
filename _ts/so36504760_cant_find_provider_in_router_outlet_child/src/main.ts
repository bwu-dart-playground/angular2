//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {App} from './app';

import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    // provide(APP_BASE_HREF, {useValue: '<%= APP_BASE %>'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
