import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubicFtCalComponent } from './cubic-ft-cal/cubic-ft-cal.component';
import { SquareFtCalComponent } from './square-ft-cal/square-ft-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    CubicFtCalComponent,
    SquareFtCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
