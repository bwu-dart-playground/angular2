library dart_issue_26839_change_detection_with_future_broken.app_element;

import 'dart:async' show Future;
import 'package:angular2/core.dart'
    show
        Component,
        View,
        Input,
        Output,
        FORM_DIRECTIVES,
        ControlGroup,
        OnInit,
        ChangeDetectorRef;

@Component(
    selector: 'app-element',
    template: '''
<h1>app-element</h1>
<div>value: {{isValue}}</div>
''' //,
//    directives: const [FORM_DIRECTIVES]
    )
class AppElement implements OnInit {
  bool isValue = false;
  ChangeDetectorRef _cdRef;
  AppElement(this._cdRef);
  void ngOnInit() {
    new Future(() {
      print('onInit');
      isValue = true;
      //_cdRef.detectChanges(); // should not be necessary
    });
  }
}
