import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/get-feed.action';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private store: Store) {}

  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean | null>;

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }
  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
