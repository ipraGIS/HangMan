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
var imagen_hangman_1 = require("./imagen-hangman");
var TableroHangmanComponent = TableroHangmanComponent_1 = (function () {
    /*public callbackLetra() {
        console.log(this.letrasError)
        return this.letrasError;
    }
    public _callbackLetra() {
        this.callbackLetra();
    };

    private callbackAddLetra = this._callbackLetra.bind(this);
*/
    function TableroHangmanComponent() {
        this.oculta = "";
        this.adivina = "";
        this.solucion = "";
        this.peliculas = ["buscando a nemo", "kunfu panda", "big hero 6", "cars", "turbo", "toy story", "peter pan"];
        this.peliculas = String.prototype.toUpperCase.apply(this.peliculas).split(",");
        this.classInputResolver = "oculto";
        this.classModalResolver = "oculto";
    }
    TableroHangmanComponent.prototype.ngOnInit = function () {
        var random = Math.floor(Math.random() * this.peliculas.length - 1) + 1;
        TableroHangmanComponent_1.pelicula = this.peliculas[random];
        if (!TableroHangmanComponent_1.pelicula)
            return;
        if (TableroHangmanComponent_1.pelicula.length > 14 && TableroHangmanComponent_1.pelicula.length < 20) {
            var ad = document.getElementById("adivina");
            var reduccion = 15 * (TableroHangmanComponent_1.pelicula.length - 14);
            document.getElementById("adivina").style.fontSize = (200 - reduccion) + "%";
        }
        else if (TableroHangmanComponent_1.pelicula.length >= 20) {
            document.getElementById("adivina").style.fontSize = "16px";
        }
        console.log(TableroHangmanComponent_1.pelicula);
        var palabrasPeli = TableroHangmanComponent_1.pelicula.split(" ");
        for (var i = 0; i < palabrasPeli.length; i++) {
            for (var j = 0; j < palabrasPeli[i].length; j++) {
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
            if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode === 192) {
                this.compruebaLetra(e.key);
            }
        }.bind(this));
    };
    TableroHangmanComponent.prototype.compruebaLetra = function (key) {
        if (TableroHangmanComponent_1.pelicula.indexOf(key.toUpperCase()) > -1) {
            this.completaPeli(key.toUpperCase());
        }
        else {
            this.addLetraError(key.toUpperCase());
        }
        var input = document.getElementById("inputLetra");
        input.value = "";
    };
    TableroHangmanComponent.prototype.completaPeli = function (key) {
        for (var i = 0; i < this.oculta.length; i++) {
            if (this.oculta[i] === key) {
                this.adivina = this.adivina.substr(0, i) + key + this.adivina.substr(i + 1);
            }
        }
    };
    TableroHangmanComponent.prototype.addLetraError = function (key) {
        if (TableroHangmanComponent_1.letrasError.indexOf(key) < 0) {
            TableroHangmanComponent_1.letrasError.push(key);
        }
    };
    TableroHangmanComponent.prototype.resolver = function (event) {
        console.log("resolver tablero?");
        //let oculto = this.classInputResolver === "oculto" ? true : false;
        //if(!oculto){
        //  this.classInputResolver = "visible";
        //}
        document.getElementById("ventanaModal").style.visibility = "visible";
        //this.classModalResolver += " visible";
    };
    TableroHangmanComponent.prototype.checkSolucion = function () {
        if (this.solucion.toUpperCase() === TableroHangmanComponent_1.pelicula) {
            //this.ganador = true;
            var imagenHangman = new imagen_hangman_1.ImagenHangmanComponent();
            imagenHangman._ganador = true;
            imagenHangman.insertaImagen();
            console.log(imagenHangman.ahorcadoSrc);
        }
        this.cerrar();
    };
    TableroHangmanComponent.prototype.cerrar = function () {
        document.getElementById("ventanaModal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    };
    return TableroHangmanComponent;
}());
TableroHangmanComponent.pelicula = "";
TableroHangmanComponent.letrasError = [];
TableroHangmanComponent = TableroHangmanComponent_1 = __decorate([
    core_1.Component({
        selector: 'tablero-hangman',
        templateUrl: 'app/views/tablero-hangman.html',
    }),
    __metadata("design:paramtypes", [])
], TableroHangmanComponent);
exports.TableroHangmanComponent = TableroHangmanComponent;
var TableroHangmanComponent_1;
//# sourceMappingURL=tablero-hangman.js.map