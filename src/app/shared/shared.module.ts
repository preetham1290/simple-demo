import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleService } from './simple.service';
import { SharedComponentComponent } from './shared-component/shared-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CommonModule],
  declarations: [SharedComponentComponent]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SimpleService]
    }
  }
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }
}
