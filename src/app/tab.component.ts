import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  template: `
    <ul class="nav nav-tabs my-4 mx-4">
      <li class="nav-item" *ngFor="let link of navs">
        <a class="nav-link" href="#">
          <ng-container *ngIf="linkTemplate" ;else noTemplate>
            <ng-container
              [ngTemplateOutlet]="linkTemplate"
              context:{link:link}
              ]
            ></ng-container>
            <ng-container #noTemplate>{{ link }}</ng-container>
          </ng-container>
        </a>
      </li>
    </ul>
  `,
})
export class TabComponent {
  @Input() navs: string[] | undefined;
  @Input() linkTemplate: TemplateRef<any> | undefined;
}
