import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {RegistroIncidentesComponent} from './registro-incidentes/registro-incidentes.component';
import {RegistroLlamadasIncidentesComponent} from './registro-llamadas-incidentes/registro-llamadas-incidentes.component';
import {PromesasComponent} from "./promesas/promesas.component";

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'registro-incidentes-mapa', component: RegistroIncidentesComponent},
            { path: 'registro-llamadas-incidentes', component: RegistroLlamadasIncidentesComponent},
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'grafica1', component: Graficas1Component},
            { path: 'promesas', component: PromesasComponent},
            { path: 'account-settings', component: AccountSettingsComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)
