import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports:[
      RouterModule,
      CommonModule
    ],
    declarations: [
        HeaderComponent,
        SlidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SlidebarComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule {}
