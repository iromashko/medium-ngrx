import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';
import { ErrorMessageModule } from '../shared/modules/error-mesage/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { TaglistModule } from '../shared/modules/tag-list/tag-list.module';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TaglistModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
