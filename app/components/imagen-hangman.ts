import { Component, OnInit } from '@angular/core';
import { TableroHangmanComponent } from './tablero-hangman';

@Component({
    selector: 'imagen-hangman',
    templateUrl: 'app/views/imagen-hangman.html',
    providers: [TableroHangmanComponent]
})
export class ImagenHangmanComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {}


}