import { Component, Input, OnInit  } from '@angular/core';
import { TableroHangmanComponent } from './tablero-hangman';


@Component({
    selector: 'teclado-hangman',
    templateUrl: 'app/views/teclado-hangman.html',
    providers: [TableroHangmanComponent]
})
export class TecladoHangmanComponent  implements OnInit {

    public letras: Array<string>;
    constructor() {
    }

    ngOnInit() {
        document.getElementById("inputLetra").addEventListener('keyup', this.prueba.bind(this), false);
        }

    private prueba(){
        console.log(TableroHangmanComponent.letrasError);
        this.letras = TableroHangmanComponent.letrasError;
    }

}