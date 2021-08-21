import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { myPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  {
    path:'first-comp',
    component:FirstComponent
  },
  {
    path: 'myPageComponent',
    component:myPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
