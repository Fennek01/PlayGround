import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { AppRountingModule } from './app-routing.module';
import { DataBindingModule } from './pages/data-binding/data-binding.module';
import { MostrarModule } from './pages/Mostrar/Mostrar.module';
import { FormsModule } from '@angular/forms';
import { DivisorModule } from './pages/data-binding/divisor/divisor.module';
import { TestesModule } from './pages/Testes/Testes.module';
import { BotaoComponent } from './pages/botao/botao.component';
import { InputComponent } from './pages/input/input.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    DataBindingModule,
    AppRountingModule,
    DivisorModule,
    TestesModule,
    MostrarModule
  ],
  declarations: [
    AppComponent,
    BotaoComponent,
    InputComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
