import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { Store, select } from '@ngrx/store';
import {
  isSubmittingSelector,
  validationErrorsSelector,
  articleSelector,
} from '../store/selectors';
import { getArticleAction } from 'src/app/article/store/actions/get-article.action';
import { ActivatedRoute } from '@angular/router';
import { isLoadingSelector } from 'src/app/article/store/selectors';
import { filter, map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { updateArticleAction } from '../store/actions/update-article.action';

@Component({
  selector: 'app-mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  slug: string;

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }

  ngOnInit(): void {
    this.initialValues();
    this.fetchData();
  }
  initialValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }
  fetchData() {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
