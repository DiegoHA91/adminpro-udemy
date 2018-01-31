import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocalCheck();
  }

  cambiarColor( tema: String, link: any ) {
    this.aplicarCheck( link);

    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck( link: any){

    const selectors: any = document.getElementsByClassName('selector');

    for(const ref of selectors){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocalCheck(){
    const selectors: any = document.getElementsByClassName('selector');
    const them = this._ajustes.ajustes.tema;

    for( const ref of selectors) {
      if ( ref.getAttribute('data-theme') === them){
        ref.classList.add('working');
        break;
      }
    }

  }
}
