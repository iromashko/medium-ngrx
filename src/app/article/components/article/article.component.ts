import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.action';
import { Observable, Subscription, combineLatest } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  articleSelector,
} from '../../store/selectors';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { stringify, parseUrl } from 'query-string';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store, private route: ActivatedRoute) {}
  slug: string;
  article: ArticleInterface;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        }
      )
    );
  }
  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }
}
