import { NgModule } from '@angular/core';
import { ArticeDetailComponent } from './articles-detail/artice-detail/artice-detail.component';
import { ArticleListComponent } from './articles-list/article-list/article-list.component';

@NgModule({
  declarations: [
    ArticeDetailComponent,
    ArticleListComponent
  ],
  imports: [CommonModule],
})
export class ArticleModule {}
