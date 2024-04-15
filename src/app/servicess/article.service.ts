import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { buffer } from 'stream/consumers';
import { Article } from '../modelss/artcle';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}
  get article$() {
    return of<Article[]>([
      {
        title: 'Title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        slug: 'title-1',
      },
      {
        title: 'Title 2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing 2',
        slug: 'title-2',
      },
    ]).pipe(shareReplay(1));
  }

  getArticle(slug: string): Observable<Article | undefined> {
    return this.article$.pipe(
      map((articles) => articles.find((ar) => ar.slug === slug))
    );
  }
}
