import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './cadastro/formulario/formulario.component';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash:false})],
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
