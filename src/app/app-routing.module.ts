import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentTestComponent } from './component-test/component-test.component';

const routes: Routes = [
  {path: '', component : ComponentTestComponent},
  {path: 'home', component : ComponentHomeComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
