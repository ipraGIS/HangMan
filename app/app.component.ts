import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

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
		// this.title = "Juego del Ahorcado";
		// this.description = "¿De que película se trata?"
		this.mostrar = 0;
	}

	 onTab(tab) {
        this.mostrar = tab;
        console.log("muestra tab " + tab)
    }
 
}