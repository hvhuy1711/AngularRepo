import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesGaurd } from '../gaurds/article.gaurds';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';

export const articlesRoutes: Routes = [
  { path: '', component: ArticleListComponent },

  {
    path: ':slug',
    canActivateChild: [ArticlesGaurd],
    children: [
      { path: '', component: ArticleDetailComponent },
      { path: 'edit', component: ArticleDetailEditComponent },
    ],
  },
];
