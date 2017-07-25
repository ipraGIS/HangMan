import { Component, OnInit } from '@angular/core';
import { TableroHangmanComponent } from './tablero-hangman';

@Component({
    selector: 'imagen-hangman',
    templateUrl: 'app/views/imagen-hangman.html',
    //providers: [TableroHangmanComponent]
})
export class ImagenHangmanComponent implements OnInit {

    public  ahorcadoSrc;
    private classInputResolver;
    private classModalResolver;
    //private solucion2;
    public  ganador = false;

    constructor() {
        this.ahorcadoSrc = 'app/assets/images/ahorcado_0.svg'
        this.classInputResolver = "oculto";
        this.classModalResolver = "oculto";
    }

    ngOnInit() {
        document.getElementById("inputLetra").addEventListener('keyup', this.insertaImagen.bind(this), false);
    }

    get _ganador(){
        return this.ganador;
    }

    set _ganador(g){
        this.ganador = g;
    }

    /*resolver(event) {
        console.log("Quieres resolver?");
        //let oculto = this.classInputResolver === "oculto" ? true : false;
        //if(!oculto){
        //  this.classInputResolver = "visible";
        //}

        document.getElementById("ventanaModal").style.visibility = "visible";
        //this.classModalResolver += " visible";

    }*/

   /* checkSolucion2() {
        console.log("desdeImagen")
        if (this.solucion2.toUpperCase() === TableroHangmanComponent.pelicula) {
           this.ganador = true;
            this.insertaImagen();
        }
        this.cerrar();
    }*/


    cerrar() {
        document.getElementById("ventanaModal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    }

    public  insertaImagen() {

        let fallos = this.ganador === true ? -1 : TableroHangmanComponent.letrasError.length;       
        switch (fallos) {
            case -1:
                this.ahorcadoSrc = "app/assets/images/champion.svg";
                let img = document.getElementById("imgAhorcado") as any;
                img.src="app/assets/images/champion.svg";
                break;
            case 0:
                console.log("image0");
                this.ahorcadoSrc = "app/assets/images/ahorcado_0.svg"
                break;
            case 1:
                console.log("image1");
                this.ahorcadoSrc = "app/assets/images/ahorcado_1.svg"
                break;
            case 2:
                this.ahorcadoSrc = "app/assets/images/ahorcado_2.svg"
                break;
            case 3:
                this.ahorcadoSrc = "app/assets/images/ahorcado_3.svg"
                break;
            case 4:
                this.ahorcadoSrc = "app/assets/images/ahorcado_4.svg";
                break;
            case 5:
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg";
                break;

            default:
                // cambiar imagen por defecto.
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg"
                break;

        }
    }


}