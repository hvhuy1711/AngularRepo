import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../servicess/article.service';
import { Observable, filter, switchMap } from 'rxjs';

import { Article } from '../../modelss/artcle';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article | undefined> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      // pluck('slug'),
      switchMap(({ slug }) => this.articleService.getArticle(slug)),
      // switchMap((slug) => this.articleService.getArticle('slug')),
      filter((article) => !!article)
    );
  }
}
