import 'package:angular2/angular2.dart' show provide;
import 'package:angular2/router.dart' show ROUTER_PROVIDERS;
import 'package:angular2/platform/browser.dart'
    show APP_BASE_HREF, HashLocationStrategy, LocationStrategy;

import 'package:angular2/platform/browser.dart' show bootstrap;
import 'package:dart_issue_26839_change_detection_with_future_broken/app_element.dart'
    show AppElement;

void main() {
//  enableProdMode();
  bootstrap(AppElement, [
    ROUTER_PROVIDERS,
    // provide(APP_BASE_HREF, useValue: '/'),
//    provide(LocationStrategy, useClass: HashLocationStrategy)
  ]);
}
