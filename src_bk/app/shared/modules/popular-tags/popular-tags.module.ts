import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-mesage/error-message.module';
import { PopularTagsService } from './services/popular-tags.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
