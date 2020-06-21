import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { Store, select } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { createArticleAction } from '../store/actions/create-article.action';
import * as faker from 'faker';

@Component({
  selector: 'app-mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  constructor(private store: Store) {}

  initialValues: ArticleInputInterface = {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    body: faker.lorem.paragraphs(),
    tagList: new Array(Math.floor(Math.random() * 5))
      .fill(null)
      .map((_) => faker.lorem.word()),
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
}
