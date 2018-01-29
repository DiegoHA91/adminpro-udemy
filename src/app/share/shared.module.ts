import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
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