import { Component, OnInit } from '@angular/core';
import {SlidebarService} from '../../services/service.index';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styles: []
})
export class SlidebarComponent implements OnInit {

  constructor( public _slidebar: SlidebarService) { }

  ngOnInit() {
  }

}
