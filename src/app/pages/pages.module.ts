import {NgModule} from '@angular/core';

import {PAGES_ROUTES} from './pages.routes';
import {SharedModule} from '../share/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {FormsModule} from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {RegistroLlamadasComponent} from '../components/registro-llamadas/registro-llamadas.component';
import {TableRegistroLlamadasComponent} from '../components/registro-llamadas/table-registro-llamadas.component';
// n2-Charts
import {ChartsModule} from 'ng2-charts';
import {GraficoDonaComponent} from '../components/graficoDona/graficoDona.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {RegistroIncidentesComponent} from './registro-incidentes/registro-incidentes.component';
import {RegistroLlamadasIncidentesComponent} from './registro-llamadas-incidentes/registro-llamadas-incidentes.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    RegistroIncidentesComponent,
    RegistroLlamadasIncidentesComponent,
    RegistroLlamadasComponent,
    TableRegistroLlamadasComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {
}
