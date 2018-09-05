import { Component, OnInit  } from '@angular/core';
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
        document.getElementById("inputLetra").addEventListener('keyup', this.listLetrasError.bind(this), false);
        }

    private listLetrasError(){
        this.letras = TableroHangmanComponent.letrasError;
      
    }

    isTrue(){
        if (this.letras)
            return this.letras.length;
 
    }

}