import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../servicess/article.service';
import { Observable, Subject, filter, switchMap, of, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from '../../modelss/artcle';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrl: './article-detail-edit.component.css',
})
export class ArticleDetailEditComponent implements OnInit {
  // private readonly $destroy = new Subject();

  form$: Observable<FormGroup> | undefined;
  private initialFormValue: unknown;
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      // pluck('slug'),
      switchMap(({ slug }) => this.articleService.getArticle(slug)),
      // switchMap((slug) => this.articleService.getArticle('slug')),
      filter((article) => !!article),
      switchMap(async (article) => of(this.initForm(article)))
    );
  }

  private initForm(article: Article): FormGroup {
    const form = this.fb.group({
      title: [article.title],
      body: [article.body],
    });
    this.initialFormValue = form.getRawValue();
    return form;
  }
}
