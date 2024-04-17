import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ArticleService } from '../../servicess/article.service';
import {
  Observable,
  Subject,
  filter,
  switchMap,
  of,
  takeUntil,
  shareReplay,
  take,
} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from '../../modelss/artcle';
import { CheckDeactivate } from '../../check-CanDeactivate';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrl: './article-detail-edit.component.css',
})
export class ArticleDetailEditComponent implements OnInit, CheckDeactivate {
  // private readonly $destroy = new Subject();

  form$: Observable<FormGroup | undefined> | undefined;
  private initialFormValue: unknown;
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}
  checkDeactivate(): Observable<boolean> {
    let formValue: unknown;
    this.form$?.pipe(take(1)).subscribe((form) => {
      formValue = form?.getRawValue();
    });
    const isEdited =
      JSON.stringify(this.initialFormValue) != JSON.stringify(formValue);
    return of(!isEdited || confirm('Do you want to center changes'));
  }

  ngOnInit(): void {
    this.route.params.pipe(
      // pluck('slug'),
      switchMap(({ slug }) => this.articleService.getArticle(slug)),
      filter((article) => !!article),
      // switchMap((article) => of(this.initForm(article))),
      shareReplay(1) // lỗi ở dòng này nữa
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
