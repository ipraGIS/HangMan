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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // this.title = "Juego del Ahorcado";
        // this.description = "¿De que película se trata?"
        this.mostrar = 0;
    }
    Object.defineProperty(AppComponent.prototype, "_mostrar", {
        set: function (m) {
            this.mostrar = m;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTab = function (tab) {
        this.mostrar = tab;
        console.log("muestra tab " + tab);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template:'<h1>Hola mundo desde Angular2</h1>'
            /*template: `<h1>Aplicacion con comillas Invertidas</h1>
                        <h2>Esto es la descripcion </h2>
                        <h3>{{title}}</h3>
                         `
            */
            templateUrl: 'app/views/home.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map