import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { articlesRoutes } from './articles.routers';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';

@NgModule({
  declarations: [ArticleDetailComponent, ArticleListComponent, ArticleDetailEditComponent],
  imports: [CommonModule, RouterModule.forChild(articlesRoutes)],
})
export class ArticleModule {}
