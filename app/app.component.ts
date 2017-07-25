import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	//template:'<h1>Hola mundo desde Angular2</h1>'
	/*template: `<h1>Aplicacion con comillas Invertidas</h1>
				<h2>Esto es la descripcion </h2>
				<h3>{{title}}</h3>
				 `
	*/
	templateUrl: 'app/views/home.html'
})

export class AppComponent {
	public title: string;
	public description: string;
	public mostrar: number;

	set _mostrar(m: number) {
		this.mostrar = m;
	}
	constructor() {
		//this.title = "Juego del Ahorcado";
		//this.description = "¿De que película se trata?"
		this.mostrar = 0;
	}

	 tablero() {
        console.log(this.mostrar);
        this.mostrar = 0;
        console.log("mostrar tablero")
    }
    jugadores() {
        console.log("mostrar jugadores");
        this.mostrar = 1;

    }

    puntuacion() {
       this.mostrar = 2;
        console.log("mostrar puntuación")
    }
 
}