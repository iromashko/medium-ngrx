import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/error-mesage/error-message.module';
import { TaglistModule } from '../shared/modules/tag-list/tag-list.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    TaglistModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
