import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperacionComponent } from './page/operacion/operacion.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
    OperacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
