import 'package:angular2/angular2.dart' show bind;
import 'package:angular2/router.dart'
    show
        APP_BASE_HREF,
        HashLocationStrategy,
        LocationStrategy,
        ROUTER_PROVIDERS;
import 'package:angular2/platform/browser.dart'show bootstrap;
import 'package:so34740382_style_encapsulation/app_element.dart' show AppElement;

void main() {
//  enableProdMode();
  bootstrap(AppElement, [
    ROUTER_PROVIDERS,
    bind(APP_BASE_HREF).toValue('/'),
//    bind(LocationStrategy).toClass(HashLocationStrategy)
  ]);
}
