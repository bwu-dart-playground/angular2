import {Input, Component} from 'angular2/core';

// https://plnkr.co/edit/wnLWAW?p


@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'show-min-max',

  // Location of the template for this component
  template: `
<div>
  Min: {{min}}
  <ng-content select="[min]"></ng-content>
</div>
<div>
  Max: {{max}}
  <ng-content select="[max]"></ng-content>
</div>  
`
})
export default class ShowMinMax {

  @Input() items:number[];
  min:number;
  max:number;

  ngOnInit() {
    this.min = this.items[0];
    this.max = this.items[0];
    for (let item of this.items) {
      if (item < this.min) {
        this.min = item;
      }
      if (item > this.max) {
        this.max = item;
      }
    }
  }
}

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app',

  // Location of the template for this component
  template: `
  <show-min-max [items]="items" #minMax>
    <span min>
      <button (click)="pick(minMax.min)">Pick {{minMax.min}}</button>
    </span>
    <span max>
      <button (click)="pick(minMax.max)">Pick {{minMax.max}}</button>
    </span>
  </show-min-max>`,
  directives: [ShowMinMax]
})
export class App {
  items:number[] = [1, 2, 3];
}

