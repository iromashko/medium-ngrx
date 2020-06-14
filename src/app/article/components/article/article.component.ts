import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/get-article.action';
import { Observable, Subscription } from 'rxjs';
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { stringify, parseUrl } from 'query-string';
import { GetArticleResponseInterface } from 'src/app/shared/types/get-article-response.interface';

@Component({
  selector: 'app-mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetArticleResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean | null>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.fetchFeed();
        this.currentPage = Number(params.page || '1');
      }
    );
  }
  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }
  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getArticleAction({ slug: apiUrlWithParams }));
  }
}
