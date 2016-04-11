//our root app component
import {Component, OnInit, Input} from 'angular2/core'

//
@Component({
    selector: 'tinymce',
    template: `<textarea id="tinymce-editor"></textarea>
<div>description: {{description}}</div>
`,
})
export class TinymceComponent implements OnInit {
    @Input() description:string;

    public ngOnInit() {
        setTimeout(() => this.description = 'new text', 5000)
    }
}

@Component({
    selector: 'templates',
    directives: [TinymceComponent],
    template: `<button (click)="update()">Update</button>
               <tinymce [(description)]="product.description"></tinymce>`
})

export class ProductEditComponent implements OnInit {
    public product:any;

    public ngOnInit() {
        this.product = {
            description: 'hello world'
        }
    }

    public update() {
        console.log(this.product)
    }
}

@Component({
    selector: 'my-app',
    directives: [ProductEditComponent],
    template: `
    <h1>Selecting Number</h1>
    <templates></templates>
  `,
})
export class App {

}

