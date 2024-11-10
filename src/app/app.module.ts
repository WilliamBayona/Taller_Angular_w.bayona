import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesModule } from './serie/serie.module'; // Importa el módulo

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SeriesModule], // Agrega el módulo aquí
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
