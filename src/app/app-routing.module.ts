import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { HomecomponentComponent } from './home/homecomponent/homecomponent.component';
import { ArticleDetailComponent } from './article-detail/article-detail/article-detail.component';

const routes: Routes = [
  // {path: '', component : ComponentTestComponent},
  { path: 'home', component: HomecomponentComponent },
  { path: 'detail/:slug', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
