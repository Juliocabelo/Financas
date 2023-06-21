import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './common/componentes/toolbar/toolbar.component';
import { MaterialModule } from './shared/material/material.module';
import { CategoriasModule } from './features/categorias/categorias.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CategoriasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
