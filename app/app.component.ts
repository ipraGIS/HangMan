import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/home.html'
})

export class AppComponent {
	public mostrar: number;

	set _mostrar(m: number) {
		this.mostrar = m;
	}
	constructor() {
		this.mostrar = 0;
	}

	 onTab(tab) {
        this.mostrar = tab;
        console.log("muestra tab " + tab)
    }
 
}