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
        // this.classInputResolver = "oculto";
        // this.classModalResolver = "oculto";
    }

    ngOnInit() {
        //document.getElementById("inputLetra").addEventListener('keyup', this.updateImagen.bind(this), false);
        //this.ahorcadoSrc = "app/assets/images/ahorcado_0.svg"
    }

    get _ganador(){
        return this.ganador;
    }

    set _ganador(g){
        this.ganador = g;
    }

    cerrar() {
        document.getElementById("modal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    }

    public  updateImagen() {
        console.log("updateImages");

        let fallos = this.ganador === true ? -1 : TableroHangmanComponent.letrasError.length;       
        console.log(fallos);
        switch (fallos) {
            case -1:
                this.ahorcadoSrc = "app/assets/images/champion.svg";
                break;
            case 0:
                this.ahorcadoSrc = "app/assets/images/ahorcado_1.svg"
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;
            case 1:
                this.ahorcadoSrc = "app/assets/images/ahorcado_1.svg"
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;
            case 2:
                this.ahorcadoSrc = "app/assets/images/ahorcado_2.svg"
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;
            case 3:
                this.ahorcadoSrc = "app/assets/images/ahorcado_3.svg"
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;
            case 4:
                this.ahorcadoSrc = "app/assets/images/ahorcado_4.svg";
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;
            case 5:
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg";
                console.log('cambiada imagen a ahorcado_'+ fallos)
                break;

            default:
                // cambiar imagen por defecto.
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg"
                break;

        }
        
    }
}