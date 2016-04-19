library so36720611_paper_tabs.app_element;

import 'package:angular2/core.dart'
    show Component, View, Input, Output, FORM_DIRECTIVES, ControlGroup;
import 'package:polymer_elements/paper_tabs.dart';
import 'package:polymer_elements/paper_tab.dart';

@Component(
    selector: 'app-element',
    template: '''
<h1>app-element</h1>
<paper-tabs selected="0"> <!-- THESE DO NOT WORK -->
  <paper-tab>MA ITEM ONE</paper-tab>
  <paper-tab>MA ITEM TWO</paper-tab>
  <paper-tab>MA ITEM THREE</paper-tab>
</paper-tabs>
''' //,
//    directives: const [FORM_DIRECTIVES]
    )
class AppElement {}
