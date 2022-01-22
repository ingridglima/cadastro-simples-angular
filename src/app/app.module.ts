import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './cadastro/formulario/formulario.component';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './cadastro/listagem/listagem.component';
import { CepService } from './cadastro/formulario/cep/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash:false})],
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CepService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
