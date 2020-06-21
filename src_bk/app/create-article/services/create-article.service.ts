import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { Observable } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from 'src/environments/environment';
import { SaveArticleResponseInterface } from 'src/app/shared/types/save-article-response.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}
  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(
        map((response: SaveArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
