import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilkConfigComponent } from './config/silk-config.component';
import { BagsConfigComponent } from './config/bags-config.component';

const appRoutes: Routes = [
  { path: 'silk/config', component : SilkConfigComponent },
  { path: 'bags/config', component : BagsConfigComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
