import { Component, Input, OnInit  } from '@angular/core';

@Component({
    selector: 'tablero-hangman',
    templateUrl: 'app/views/tablero-hangman.html',
})
export class TableroHangmanComponent implements OnInit  {
    public peliculas: Array<string>;
    public pelicula: string = "";
    public oculta: string = "";
    public adivina: string = "";
    static letrasError: Array<string> = [];

    /*public callbackLetra() {
        console.log(this.letrasError)
        return this.letrasError;
    }
    public _callbackLetra() {
        this.callbackLetra();
    };

    private callbackAddLetra = this._callbackLetra.bind(this);
*/
    constructor() {
        this.peliculas = ["buscando a nemo", "kunfu panda", "big hero 6", "cars", "turbo", "toy story", "peter pan"];
        this.peliculas = String.prototype.toUpperCase.apply(this.peliculas).split(",");
    }


    ngOnInit() {
        let random = Math.floor(Math.random() * this.peliculas.length - 1) + 1
        this.pelicula = this.peliculas[random];
        if (!this.pelicula)
            return;

        console.log(this.pelicula);
        let palabrasPeli: String[] = this.pelicula.split(" ");

        for (let i = 0; i < palabrasPeli.length; i++) {
            for (let j = 0; j < palabrasPeli[i].length; j++) {
                this.adivina += "_ ";
                this.oculta += palabrasPeli[i][j];
                this.oculta += " ";
            }
            if (palabrasPeli.length > 1) {
                this.adivina += "/";
                this.oculta += "/";
            }
        }
        this.adivina = this.adivina.substring(0, this.adivina.length - 1);
        this.oculta = this.oculta.substring(0, this.oculta.length - 1);

        //document.getElementById("inputLetra").addEventListener('keyup', this.escribeLetra.bind(this), false);

        document.getElementById("inputLetra").addEventListener('keyup', function (e) {
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 192) {// para la ñ
                this.compruebaLetra(e.key);
            }
        }.bind(this));
    }

    private compruebaLetra(key) {
        if (this.pelicula.indexOf(key.toUpperCase()) > -1) {
            this.completaPeli(key.toUpperCase());
        } else {
            this.addLetraError(key.toUpperCase());
        }
    }
    private completaPeli(key) {

        for (let i = 0; i < this.oculta.length; i++) {
            if (this.oculta[i] === key) {
                this.adivina = this.adivina.substr(0, i) + key + this.adivina.substr(i + 1);
            }
        }
    }
    private addLetraError(key) {
        if (TableroHangmanComponent.letrasError.indexOf(key) < 0) {
            TableroHangmanComponent.letrasError.push(key);
        }
        
    }

}