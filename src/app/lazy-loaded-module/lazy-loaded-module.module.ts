import { NgModule } from '@angular/core';
import { LazyLoadedModuleRoutingModule } from './lazy-loaded-module-routing.module';
import { LazyLoadedModuleComponent } from './lazy-loaded-module.component';

@NgModule({
  imports: [
    LazyLoadedModuleRoutingModule
  ],
  declarations: [LazyLoadedModuleComponent]
})
export class LazyLoadedModuleModule { }
