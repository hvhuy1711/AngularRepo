import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../../modelss/artcle';
import { ArticleService } from '../../../servicess/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles$: Observable<Article[]> | undefined;
  constructor(
    private readonly ArticleService: ArticleService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.articles$ = this.ArticleService.article$;
  }
  onReadMoreClick(slug: string) {
    this.router.navigate(['/detail', slug]);
  }
}
