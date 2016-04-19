import 'package:angular2/angular2.dart' show provide;
import 'package:angular2/router.dart'
    show
        APP_BASE_HREF,
        HashLocationStrategy,
        LocationStrategy,
        ROUTER_PROVIDERS;
import 'package:angular2/platform/browser.dart'show bootstrap;
import 'package:so36720611_paper_tabs/app_element.dart' show AppElement;
import 'package:polymer/polymer.dart' show initPolymer;

void main() async {
  await initPolymer();
//  enableProdMode();
  bootstrap(AppElement, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, useValue: '/'),
//    provide(LocationStrategy, useClass: HashLocationStrategy)
  ]);
}
