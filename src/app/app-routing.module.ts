import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FigmaserachComponent } from './figmaserach/figmaserach.component';


const routes: Routes = [
  {
    path:"",
    component:FigmaserachComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
