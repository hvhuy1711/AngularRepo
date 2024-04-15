import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../modelss/artcle';
import { ArticleService } from '../../servicess/article.service';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.css',
})
export class HomecomponentComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;
  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.articles$ = this.articleService.article$;
  }
  onReadMoreClick(slug: string) {
    this.router.navigate(['/detail', slug]);
  }
}
