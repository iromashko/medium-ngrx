import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopbarModule } from './shared/modules/topbar/topbar.module';
import { PersistanceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { BannerModule } from './shared/modules/banner/banner.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { YourFeedModule } from './your-feed/your-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TopbarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    BannerModule,
    ArticleModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
