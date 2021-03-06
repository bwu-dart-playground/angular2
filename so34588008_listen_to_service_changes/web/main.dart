import 'package:angular2/angular2.dart' show bind;
import 'package:angular2/router.dart'
    show
        APP_BASE_HREF,
        HashLocationStrategy,
        LocationStrategy,
        ROUTER_PROVIDERS;
import 'package:angular2/platform/browser.dart'show bootstrap;
import 'package:so34588008_listen_to_service_changes/app_element.dart' show AppElement, Auth;

void main() {
//  enableProdMode();
  bootstrap(AppElement, [
    ROUTER_PROVIDERS,
    bind(APP_BASE_HREF).toValue('/'),
    Auth
//    bind(LocationStrategy).toClass(HashLocationStrategy)
  ]);
}
