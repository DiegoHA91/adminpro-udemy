import { Component, OnInit, Input, ViewChild, Output, ElementRef, EventEmitter} from "@angular/core";
import { element } from 'protractor';


@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor = new EventEmitter();


  constructor() {
    //console.log('Leyenda', this.leyenda);
    /* console.log('progreso', this.progreso); */
  }

  ngOnInit() {
    /* console.log('Leyenda', this.leyenda); */
    ///console.log('progreso', this.progreso);
  }

  onChanges(newValue:number){
    
   //console.log(this.txtProgress);

    //let elementHTML:any = document.getElementsByName('progreso')[0];
    //console.log(elementHTML.value);

    //console.log(newValue);
    if(newValue >= 100 ){
      this.progreso = 100;
      newValue = 100;
    } else if(newValue < 0){
      this.progreso = 0;
      newValue = 0;
    } else if(newValue == null){
      this.progreso = 0;
      newValue = 0;
    }else {
      this.progreso = newValue;
    }
    //elementHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      //console.log(this.progreso);
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      //console.log(this.progreso);
      return;
    }
    this.progreso = this.progreso + valor;

    
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
    
  }
}
