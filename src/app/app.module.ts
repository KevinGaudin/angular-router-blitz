import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SilkConfigComponent } from './config/silk-config.component';
import { BagsConfigComponent } from './config/bags-config.component';

@NgModule({
  declarations: [
    AppComponent,
    SilkConfigComponent,
    BagsConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
