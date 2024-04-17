import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ComponentOvervierByManually } from './component-overview-by-manually/compoment-overview-by-manually';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-details/author-list.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabComponent } from './tab.component';
import { HomecomponentComponent } from './home/homecomponent/homecomponent.component';
import { ArticleModule } from './articles/articles.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';
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
    ToggleComponent,
    TabComponent,
    HomecomponentComponent,
    SignInComponent,
    SignInRfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticleModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
