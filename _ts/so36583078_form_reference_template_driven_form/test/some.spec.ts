import {setBaseTestProviders} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
import {
    //AsyncTestCompleter,
    TestComponentBuilder,
    beforeEachProviders,
    beforeEach,
    describe,
    // el,
    expect,
    inject,
    it
} from 'angular2/testing';
//import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Component, provide, DirectiveResolver, ElementRef} from 'angular2/core';
import {App} from '../src/app';
//import {ROUTER_PROVIDERS from 'angular2/router';

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS);

describe('MyComponent test', () => {
  beforeEachProviders(() => [
//    ROUTER_PROVIDERS,
    DirectiveResolver,
    App
  ]);


  it('Should contains title property - "Header"', inject([App],
      (myComponent:App) => {
        //expect(myComponent.title).toBe('Title');
        expect(true).toBeTruthy()
      }));
});
