import { Component, OnInit } from '@angular/core';
import { TableroHangmanComponent } from './tablero-hangman';

@Component({
    selector: 'imagen-hangman',
    templateUrl: 'app/views/imagen-hangman.html',
    providers: [TableroHangmanComponent]
})
export class ImagenHangmanComponent implements OnInit {

    private ahoradoSrc;
    private classInputResolver;
    private classModalResolver;
    private solucion2;
    private ganador = false;

    constructor() {
        this.ahoradoSrc = 'app/assets/images/ahorcado_0.svg'
        this.classInputResolver = "oculto";
        this.classModalResolver = "oculto";
    }

    ngOnInit() {
        document.getElementById("inputLetra").addEventListener('keyup', this.insertaImagen.bind(this), false);
    }


    resolver(event) {
        console.log("Quieres resolver?");
        //let oculto = this.classInputResolver === "oculto" ? true : false;
        //if(!oculto){
        //  this.classInputResolver = "visible";
        //}

        document.getElementById("ventanaModal").style.visibility = "visible";
        //this.classModalResolver += " visible";

    }

    checkSolucion2() {
        console.log(this.solucion2);
        if (this.solucion.toUpperCase() === TableroHangmanComponent.pelicula) {
            this.ganador = true;
            this.insertaImagen();
        }
        this.cerrar();
    }


    cerrar() {
        document.getElementById("ventanaModal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    }

    public insertaImagen() {

        let fallos = this.ganador === true ? -1 : TableroHangmanComponent.letrasError.length
        console.log(this.ganador);
        switch (fallos) {
            case -1:
                this.ahoradoSrc = "app/assets/images/champion.svg";
                break;
            case 0:
                console.log("image0");
                this.ahoradoSrc = "app/assets/images/ahorcado_0.svg"
                break;
            case 1:
                console.log("image1");
                this.ahoradoSrc = "app/assets/images/ahorcado_1.svg"
                break;
            case 2:
                this.ahoradoSrc = "app/assets/images/ahorcado_2.svg"
                break;
            case 3:
                this.ahoradoSrc = "app/assets/images/ahorcado_3.svg"
                break;
            case 4:
                this.ahoradoSrc = "app/assets/images/ahorcado_4.svg";
                break;
            case 5:
                this.ahoradoSrc = "app/assets/images/ahorcado_5.svg";
                break;

            default:
                // cambiar imagen por defecto.
                this.ahoradoSrc = "app/assets/images/ahorcado_5.svg"
                break;

        }
    }


}