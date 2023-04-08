import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimationsComponent} from "./animations/animations.component";
import {TestPageComponent} from "./test-page/test-page.component";

const routes: Routes = [{
  path: 'animations',
  component: AnimationsComponent
},{
  path: 'test-page',
  component: TestPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
