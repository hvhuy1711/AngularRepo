import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { HomecomponentComponent } from './home/homecomponent/homecomponent.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { features } from 'process';
import { ArticlesGaurd } from './gaurds/article.gaurds';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';
// import { environment } from '@angular/environment';

const routes: Routes = [
  // {path: '', component : ComponentTestComponent},
  { path: 'home', component: HomecomponentComponent },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticleModule),
    data: {
      features: 'articles',
      permissions: 'articles-read',
    },
    canLoad: [ArticlesGaurd],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-in-rf', component: SignInRfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
