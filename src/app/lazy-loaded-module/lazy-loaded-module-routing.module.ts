import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';

const routes: Routes = [{
  path: '',
  component: LazyLoadedModuleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LazyLoadedModuleRoutingModule { }
