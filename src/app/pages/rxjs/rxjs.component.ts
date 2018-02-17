import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservale().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador Termino!')
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  regresaObservale(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2){
        //   clearInterval(intervalo);
        //   observer.error('Error en el obs Auxilio');
        // }
      }, 500);
    }).retry(2)
      .map((resp: any) => {
        return resp.valor;
      })
      .filter((valor, index) => {

        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      });
  }
}
