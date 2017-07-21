"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tablero_hangman_1 = require("./tablero-hangman");
var ImagenHangmanComponent = (function () {
    function ImagenHangmanComponent() {
        this.ganador = false;
        this.ahoradoSrc = 'app/assets/images/ahorcado_0.svg';
        this.classInputResolver = "oculto";
        this.classModalResolver = "oculto";
    }
    ImagenHangmanComponent.prototype.ngOnInit = function () {
        document.getElementById("inputLetra").addEventListener('keyup', this.insertaImagen.bind(this), false);
    };
    ImagenHangmanComponent.prototype.resolver = function (event) {
        console.log("Quieres resolver?");
        //let oculto = this.classInputResolver === "oculto" ? true : false;
        //if(!oculto){
        //  this.classInputResolver = "visible";
        //}
        document.getElementById("ventanaModal").style.visibility = "visible";
        //this.classModalResolver += " visible";
    };
    ImagenHangmanComponent.prototype.checkSolucion2 = function () {
        console.log(this.solucion2);
        if (this.solucion.toUpperCase() === tablero_hangman_1.TableroHangmanComponent.pelicula) {
            this.ganador = true;
            this.insertaImagen();
        }
        this.cerrar();
    };
    ImagenHangmanComponent.prototype.cerrar = function () {
        document.getElementById("ventanaModal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    };
    ImagenHangmanComponent.prototype.insertaImagen = function () {
        var fallos = this.ganador === true ? -1 : tablero_hangman_1.TableroHangmanComponent.letrasError.length;
        console.log(this.ganador);
        switch (fallos) {
            case -1:
                this.ahoradoSrc = "app/assets/images/champion.svg";
                break;
            case 0:
                console.log("image0");
                this.ahoradoSrc = "app/assets/images/ahorcado_0.svg";
                break;
            case 1:
                console.log("image1");
                this.ahoradoSrc = "app/assets/images/ahorcado_1.svg";
                break;
            case 2:
                this.ahoradoSrc = "app/assets/images/ahorcado_2.svg";
                break;
            case 3:
                this.ahoradoSrc = "app/assets/images/ahorcado_3.svg";
                break;
            case 4:
                this.ahoradoSrc = "app/assets/images/ahorcado_4.svg";
                break;
            case 5:
                this.ahoradoSrc = "app/assets/images/ahorcado_5.svg";
                break;
            default:
                // cambiar imagen por defecto.
                this.ahoradoSrc = "app/assets/images/ahorcado_5.svg";
                break;
        }
    };
    return ImagenHangmanComponent;
}());
ImagenHangmanComponent = __decorate([
    core_1.Component({
        selector: 'imagen-hangman',
        templateUrl: 'app/views/imagen-hangman.html',
        providers: [tablero_hangman_1.TableroHangmanComponent]
    }),
    __metadata("design:paramtypes", [])
], ImagenHangmanComponent);
exports.ImagenHangmanComponent = ImagenHangmanComponent;
//# sourceMappingURL=imagen-hangman.js.map