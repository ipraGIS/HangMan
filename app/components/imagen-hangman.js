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
var ImagenHangmanComponent = /** @class */ (function () {
    function ImagenHangmanComponent() {
        //private solucion2;
        this.ganador = false;
        this.ahorcadoSrc = 'app/assets/images/ahorcado_0.svg';
        // this.classInputResolver = "oculto";
        // this.classModalResolver = "oculto";
    }
    ImagenHangmanComponent.prototype.ngOnInit = function () {
        //document.getElementById("inputLetra").addEventListener('keyup', this.updateImagen.bind(this), false);
        //this.ahorcadoSrc = "app/assets/images/ahorcado_0.svg"
    };
    Object.defineProperty(ImagenHangmanComponent.prototype, "_ganador", {
        get: function () {
            return this.ganador;
        },
        set: function (g) {
            this.ganador = g;
        },
        enumerable: true,
        configurable: true
    });
    ImagenHangmanComponent.prototype.cerrar = function () {
        document.getElementById("modal").style.visibility = "hidden";
        this.classInputResolver = "oculto";
    };
    ImagenHangmanComponent.prototype.updateImagen = function () {
        console.log("updateImages");
        var fallos = this.ganador === true ? -1 : tablero_hangman_1.TableroHangmanComponent.letrasError.length;
        console.log(fallos);
        switch (fallos) {
            case -1:
                this.ahorcadoSrc = "app/assets/images/champion.svg";
                break;
            case 0:
                this.ahorcadoSrc = "app/assets/images/ahorcado_1.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            case 1:
                this.ahorcadoSrc = "app/assets/images/ahorcado_1.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            case 2:
                this.ahorcadoSrc = "app/assets/images/ahorcado_2.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            case 3:
                this.ahorcadoSrc = "app/assets/images/ahorcado_3.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            case 4:
                this.ahorcadoSrc = "app/assets/images/ahorcado_4.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            case 5:
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg";
                console.log('cambiada imagen a ahorcado_' + fallos);
                break;
            default:
                // cambiar imagen por defecto.
                this.ahorcadoSrc = "app/assets/images/ahorcado_5.svg";
                break;
        }
    };
    ImagenHangmanComponent = __decorate([
        core_1.Component({
            selector: 'imagen-hangman',
            templateUrl: 'app/views/imagen-hangman.html',
        }),
        __metadata("design:paramtypes", [])
    ], ImagenHangmanComponent);
    return ImagenHangmanComponent;
}());
exports.ImagenHangmanComponent = ImagenHangmanComponent;
//# sourceMappingURL=imagen-hangman.js.map