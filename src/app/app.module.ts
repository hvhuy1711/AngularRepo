import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ComponentOvervierByManually } from './component-overview-by-manually/compoment-overview-by-manually';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-details/author-list.component';
import { ToggleComponent } from './toggle/toggle.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    ComponentOvervierByManually,
    ComponentHomeComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
