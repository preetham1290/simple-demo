import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [ {
  path: 'lazy',
  loadChildren: 'app/lazy-loaded-module/lazy-loaded-module.module#LazyLoadedModuleModule'
}, {
  path: '',
  redirectTo: '/lazy',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
