library so36397535_interval.app_element;

import 'dart:async' show Timer;

import 'package:angular2/core.dart'
    show Component, View, Input, Output, FORM_DIRECTIVES, ControlGroup;

///
@Component(
    selector: 'app-element',
    template: '''
<h1>app-element</h1>
''' //,
//    directives: const [FORM_DIRECTIVES]
    )
class AppElement {
  Timer _timer;
  ///
  someFunc() {
    _timer = new Timer.periodic(const Duration(milliseconds: 1000 /*properties.delay*/),
        (_) {
//      if (this.carouselIndex < this.showcases.length - 1) {
//        this.carouselIndex = this.carouselIndex + 1;
//      } else {
//        this.carouselIndex = 0;
//      }
    });

    _timer.cancel();
  }
}
