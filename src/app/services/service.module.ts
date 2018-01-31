import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        SettingsService,
        SlidebarService,
        SharedService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SlidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
