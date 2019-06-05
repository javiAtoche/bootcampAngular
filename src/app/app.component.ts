import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcampAngular';
  public inputEjercicio1:string;

  public labelBuscar:string ;
  public labelPlaceHolder:string ;

  public msgEventSearch:string;

  constructor(){
    this.labelBuscar = "Buscar";
    this.labelPlaceHolder = "Ejemplo de búsqueda";
  }

  search(event){
    this.msgEventSearch = event.query + ' => ' + event.resultado;
  }

}
