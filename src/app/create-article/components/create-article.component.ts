import { Component } from '@angular/core';

@Component({
  selector: 'app-mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Baz',
    body: 'Bar',
    tagList: ['123'],
  };
  onSubmit(res: any): void {
    console.log(`res`, res);
  }
}
