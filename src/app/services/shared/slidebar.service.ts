import {Injectable} from '@angular/core';

@Injectable()
export class SlidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Registro de Incidentes | Mapa', url: '/registro-incidentes-mapa'},
        {titulo: 'Registro de Incidentes | Llamadas', url: '/registro-llamadas-incidentes'},
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Gráficas', url: '/grafica1'},
        {titulo: 'Promesas', url: '/promesas'}
      ]
    }
  ]

  constructor() {
  }

}
