import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { ComponentOvervierByManually } from '../component-overview-by-manually/compoment-overview-by-manually';
import { ComponentHomeComponent } from './component-home/component-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    ComponentOvervierByManually,
    ComponentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
