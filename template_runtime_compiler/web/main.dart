import 'package:angular2/angular2.dart' show provide;
import 'package:angular2/router.dart'
    show
        APP_BASE_HREF,
        HashLocationStrategy,
        LocationStrategy,
        ROUTER_PROVIDERS;
import 'package:angular2/platform/browser.dart'show bootstrap;
import 'package:template_runtime_compiler/app_element.dart' show AppElement;
import 'package:angular2/src/compiler/compiler.dart' show TemplateCompiler;
import 'package:angular2/src/compiler/runtime_compiler.dart' show RuntimeCompiler, RuntimeCompiler_;

void main() {
//  enableProdMode();
  bootstrap(AppElement, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, useValue: '/'),

//    provide(LocationStrategy, useClass: HashLocationStrategy)
  ]);
}
