import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"; // for use ngModel


import { AppComponent } from './app.component';


import { TableroHangmanComponent } from './components/tablero-hangman';
import { TecladoHangmanComponent } from './components/teclado-hangman';
import { ImagenHangmanComponent } from './components/imagen-hangman';


@NgModule({
imports: [ BrowserModule, FormsModule],
declarations: [ AppComponent, TableroHangmanComponent, TecladoHangmanComponent, ImagenHangmanComponent],
bootstrap: [ AppComponent ]
})
export class AppModule { }