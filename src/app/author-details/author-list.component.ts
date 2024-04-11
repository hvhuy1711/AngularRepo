import { Component } from "@angular/core";
import { authors ,Author } from '../authors.model';

@Component({
  selector: 'app-author-list',
  template:`
    <app-author-details *ngFor="let author of authors" [author]="author"
    (select)="onSelected($event)"
    (delete)="onDeleted($event)"
    ></app-author-details>
    <br>
    <div>
      curent selected author: {{curentAuthor.firstName}} {{curentAuthor.lastName}}
    </div>
  `,
})
export class AuthorListComponent{
 authors = authors;
 curentAuthor = authors[0];

 onSelected(selectedAuthor : Author){
  this.curentAuthor = selectedAuthor;
 }

 onDeleted(id: number){
  this.authors = this.authors.filter(author => author.id!== id);
  if(this.curentAuthor.id === id){
   this.curentAuthor = authors[0];
  }
 }

}
