import { Component } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {

  operacion:String = "5";
  
  primerValor = 0;
  segundoValor = 0;
  resultado = 0;
  none:String = "(No se eligió una operación)"

  option:String ="";

Operacion(){ 
  this.option = (<HTMLSelectElement>document.getElementById('opciones')).value;
    
  this.operacion = this.option;

  if (this.option == "1") {
    var suma = (this.primerValor + this.segundoValor);
    this.resultado = suma;
  } else if (this.option == "2") {
    var resta = (this.primerValor - this.segundoValor);
    this.resultado = resta;
  } else if (this.option == "3") {
    var multiplicacion = (this.primerValor * this.segundoValor);
    this.resultado = multiplicacion;
  } else if (this.option == "4") {
    var division = (this.primerValor / this.segundoValor);
    this.resultado = division;
  } 

}



}
