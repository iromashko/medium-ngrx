import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { EditArticleService } from './services/edit-article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
