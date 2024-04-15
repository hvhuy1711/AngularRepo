import { Routes } from '@angular/router';
import { ArticeDetailComponent } from './articles-detail/artice-detail/artice-detail.component';
import { ArticleListComponent } from './articles-list/article-list/article-list.component';

export const articlesRoutes: Routes = [
  {
    path: 'articles',
    children: [
      { path: '', component: ArticleListComponent },
      { path: ':slug', component: ArticeDetailComponent },
    ],
  },
];
