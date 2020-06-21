import { AuthStateInterface } from './auth-state.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feed-state.interface';
import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popular-tags-state.interface';
import { ArticleStateInterface } from 'src/app/article/types/article-state.interface';
import { CreateArticleStateInterface } from 'src/app/create-article/types/create-article-state.interface';
import { EditArticleStateInterface } from 'src/app/edit-article/types/edit-article-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
}
